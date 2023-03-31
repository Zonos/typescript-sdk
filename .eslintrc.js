/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['airbnb/base', 'plugin:import/typescript', 'prettier'],
  plugins: [
    'jest',
    'prettier',
    'simple-import-sort',
    '@typescript-eslint',
    'deprecation',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    /**
     * Listen to typescript configuration
     */
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
  overrides: [
    {
      /**
       * Disable no-undef on typescript file since the check it provides are already provided by Typescript without the need for configuration
       * Refs: https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TROUBLESHOOTING.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
       */
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.graphql.*'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  rules: {
    /**
     * Report deprecated variables (This is helpful to find deprecated variables are being used)
     * @link https://www.npmjs.com/package/eslint-plugin-deprecation
     * */
    'deprecation/deprecation': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      /** Allow test files to import library from devDependencies */
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx', 'build-utils/**'],
      },
    ],
    /**
     * Report all unnecessary chaining "?".
     * @description https://github.com/typescript-eslint/typescript-eslint/issues/1641 (Issue description)
     * @info https://typescript-eslint.io/rules/no-unnecessary-condition/ (Eslint rule detail)
     * */
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-explicit-any': 'error',
    camelcase: 'off',
    'no-unused-vars': 'off', // Disable the base rule it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { typedefs: false }, // disable for typing definition
    ],
    'no-restricted-exports': 'off',
    /** @link https://eslint.org/docs/latest/rules/no-unused-vars#ignorerestsiblings */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 'off', // Typescript takes care of this
    'import/prefer-default-export': 'off',
    'import/no-internal-modules': [
      'warn',
      {
        forbid: [
          /* Forbids every index file in in all sub folders under folder other than `types` / `pages` */
          '**/src/!(types|pages)*/**/index.ts*',
          /* Forbids every index file in in folders other than `types` / `pages` */
          '**/src/!(types|pages)*/index.ts*',
          /* Forbids to access index.ts in all folders in `pages` but not in subfolder `api` */
          '**/src/pages/!(api)*/**/index.ts*',
        ],
      },
    ],
    'import/no-cycle': 'off',
    'no-console': 'warn', // For debugging ease
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^@?w', '^(?!src)'], ['^(src)/'], ['((.|..)/)?']],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['src/types/*', '!src/types/generated'],
            message: 'Please use src/types instead',
          },
        ],
      },
    ],
  },
};
