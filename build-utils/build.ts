/* eslint-disable import/no-extraneous-dependencies */
import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import { config } from 'dotenv';
import { globSync } from 'glob';
import { peerDependencies } from 'package.json';
import {
  type InputOptions,
  type OutputChunk,
  type OutputOptions,
  rollup,
} from 'rollup';
import progress from 'rollup-plugin-progress';
import tsPlugin from 'rollup-plugin-typescript2';

import sizes from './plugins/customized-rollup-plugin-sizes';

config();

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
    cache: false,
    external: Object.keys(peerDependencies),
    maxParallelFileOps: 50,
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
          dangerousForOf: true,
          dangerousTaggedTemplateString: true,
          modules: false,
        },
      }),
      terser(),
      progress({ clearLine: true }),
      sizes({ details: true }),
      replace({
        preventAssignment: true,
        'process.env.CUSTOMER_GRAPH_URL': JSON.stringify(
          process.env.CUSTOMER_GRAPH_URL ||
            'missing-the-CUSTOMER_GRAPH_URL-env-var'
        ),
      }),
    ],
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
    // ex: folderName/zonosClientRequest.js
    const [, subFolderPath, fileName] =
      bundle.fileName.split(/(.*\/)*(.*)\.js/g);
    // exclude all bundles that are not entry or just private components
    if (
      !bundle.isEntry ||
      /^_+/.test(fileName || '') ||
      /__tests__/.test(subFolderPath || '')
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
    maxParallelFileOps: 200,
    output: {
      dir: 'dist',
      exports: 'auto',
      format: 'cjs',
      interop: 'auto',
      sourcemap: false,
    },
  },
];

/* Set max listener based on the size of bundleConfig (1 config will add 4 event listeners) */
process.stdout.setMaxListeners(configs.length * 4 + 1);
process.stderr.setMaxListeners(configs.length * 4 + 1);

const build = async () => {
  const bundledPackages = await Promise.all(configs.map(bundlePackage));
  await Promise.all(
    // generate module contents
    bundledPackages.map(generateAllModulesContent)
  );
};

build();
