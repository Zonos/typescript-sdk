import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import { generateCustomer } from './customer.codegen';

export type GenerateConfig = CodegenConfig['generates'];

// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript
const pluginConfigTypescript = {
  avoidOptionals: {
    field: true,
    inputValue: false,
    object: true,
    defaultValue: true,
  },
  // Use Unions instead of Enums
  enumsAsTypes: true,
} as const satisfies TypeScriptPluginConfig;

// https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations
const pluginConfigTypescriptOperations = {
  // Warns for undefined (any) type scalars
  strictScalars: true,
  /**
   * Try to use defined scalar instead of using primitive type (number,string, ...) for more descriptive
   * @example
   `duties: Maybe<Scalars['Decimal']>` is more descriptive than `duties: number`
   */
  preResolveTypes: false,
} as const satisfies TypeScriptDocumentsPluginConfig;

const config: CodegenConfig = {
  config: {
    ...pluginConfigTypescript,
    ...pluginConfigTypescriptOperations,
  },
  generates: {
    ...generateCustomer,
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix --ignore-pattern "*.schema.json"'],
  },
};

export default config;
