import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import fs from 'fs';
import { globSync } from 'glob';
import { InputOptions, OutputChunk, OutputOptions, rollup } from 'rollup';
import progress from 'rollup-plugin-progress';
import tsPlugin from 'rollup-plugin-typescript2';

import { dependencies, peerDependencies } from '../package.json';
import sizes from './plugins/customized-rollup-plugin-sizes';

type RollupOptions = InputOptions & { output?: OutputOptions };
type ConfigOptions = Omit<RollupOptions, 'input' | 'output'> &
  Required<Pick<RollupOptions, 'input' | 'output'>>;
/**
 * Prepare the list of entries
 * @param entries array of entries that need to be prepared or ignore single entry
 * @returns string{} | string
 */
const prepareEntries = (entries: string[] | string) =>
  Array.isArray(entries)
    ? entries.reduce(
        (prev, current) => ({
          ...prev,
          [current.replace(/\.tsx?$/, '').replace('src/', '')]: current,
        }),
        {}
      )
    : entries;

/**
 * Bundle package
 * @param options option to configure parcel to bundle package, `input` is required. Use default option if it's not specified
 * @example
 * {
 *   input: 'src/icons/*.tsx'
 * }
 */
const bundlePackage = async (
  options: ConfigOptions & { output: OutputOptions }
): Promise<OutputChunk[]> => {
  const defaultOptions: RollupOptions = {
    plugins: [
      nodeResolve({
        // Seems to evaluate falsiness, so put something
        resolveOnly: [''],
      }),
      tsPlugin({
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext',
          },
        },
      }),
      buble({
        exclude: 'node_modules/**',
        include: '**/*.{js,mjs,jsx,ts,tsx,vue}',
        transforms: {
          modules: false,
          dangerousForOf: true,
          dangerousTaggedTemplateString: true,
        },
      }),
      terser(),
      progress({ clearLine: true }),
      sizes({ details: true }),
    ],
    cache: false,
    external: Object.keys(peerDependencies).concat(Object.keys(dependencies)),
    maxParallelFileOps: 50,
  };
  const configOptions: ConfigOptions = {
    ...defaultOptions,
    ...options,
  };

  try {
    const bundle = await rollup(configOptions);

    const { output } = await bundle.write(configOptions.output);
    return output.filter(item => item.type === 'chunk') as OutputChunk[];
  } catch (err) {
    console.error('Error bundling:', err); // eslint-disable-line no-console
    return [];
  }
};

const generateAllModulesContent = async (
  bundles: OutputChunk[]
): Promise<string[]> =>
  bundles.flatMap(bundle => {
    // ex: folderName/gqlRequest.js
    const [, subFolderPath, fileName] =
      bundle.fileName.split(/(.*\/)*(.*)\.js/g);
    // exclude all bundles that are not entry or just private components
    if (
      !bundle.isEntry ||
      /^_+/.test(fileName) ||
      /__tests__/.test(subFolderPath)
    ) {
      return [];
    }
    return [`import './${subFolderPath || ''}${fileName}';`];
  });

const mainModules = globSync('src/*.ts');

const allModules = mainModules
  /** Exclude dev folders */
  .filter(item => !item.includes('__tests__'))
  /** Exclude all.ts */
  .filter(item => !item.includes('/all.ts'));

const configs: ConfigOptions[] = [
  {
    input: prepareEntries(allModules),
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      exports: 'auto',
      interop: 'auto',
    },
    maxParallelFileOps: 200,
  },
];

/* Set max listener based on the size of bundleConfig (1 config will add 4 event listeners) */
process.stdout.setMaxListeners(configs.length * 4 + 1);
process.stderr.setMaxListeners(configs.length * 4 + 1);

const build = async () => {
  const bundledPackages = await Promise.all(configs.map(bundlePackage));
  const moduleContents = await Promise.all(
    // generate module contents
    bundledPackages.map(generateAllModulesContent)
  );

  fs.writeFileSync(
    // generate all modules ts file
    `./src/all.ts`,
    `${moduleContents
      .flat()
      .sort((a, b) => a.localeCompare(b))
      .join('\n')}\n`
  );
};

build();
