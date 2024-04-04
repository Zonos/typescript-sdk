import type { CodegenConfig } from '@graphql-codegen/cli';
import type { TypeScriptPluginConfig } from '@graphql-codegen/typescript';
import type { RawGraphQLRequestPluginConfig } from '@graphql-codegen/typescript-graphql-request/typings/config';
import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';
import type { DocumentMode } from '@graphql-codegen/visitor-plugin-common';

import { generateCustomer } from './customer.codegen';

export type GenerateConfig = CodegenConfig['generates'];

/** @link https://the-guild.dev/graphql/codegen/plugins/typescript/typescript */
const pluginConfigTypescript = {
  avoidOptionals: {
    defaultValue: true,
    field: true,
    inputValue: false,
    object: true,
  },
  // Use Unions instead of Enums
  enumsAsTypes: true,
} as const satisfies TypeScriptPluginConfig;

/** @link https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-graphql-request */
const pluginConfigTypescriptGraphqlRequest = {
  documentMode: 'string' as DocumentMode,
  typesPrefix: 'Zonos',
  useTypeImports: true,
} as const satisfies RawGraphQLRequestPluginConfig;

/** @link https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations */
const pluginConfigTypescriptOperations = {
  /**
   * Try to use defined scalar instead of using primitive type (number,string, ...) for more descriptive
   * @example
   `duties: Maybe<Scalars['Decimal']>` is more descriptive than `duties: number`
   */
  preResolveTypes: false,
  // Warns for undefined (any) type scalars
  strictScalars: true,
} as const satisfies TypeScriptDocumentsPluginConfig;

const config: CodegenConfig = {
  config: {
    ...pluginConfigTypescript,
    ...pluginConfigTypescriptOperations,
    ...pluginConfigTypescriptGraphqlRequest,
  },
  generates: {
    ...generateCustomer,
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix --ignore-pattern "*.schema.json"'],
  },
};

export default config;
