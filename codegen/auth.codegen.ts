import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateAuth = {
  'src/types/generated/graphql.auth.types.ts': {
    schema: `${process.env.ZONOS_AUTH_GRAPH_URL}`,
    documents: 'src/**/*.graphql.auth.ts',
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-graphql-request',
    ],
    config: {
      scalars: {
        DateTime: 'string',
        Decimal: 'number',
        ZonedDateTime: 'string',
        _FieldSet: 'string',
      },
    } satisfies TypeScriptDocumentsPluginConfig,
  },
  'src/types/generated/graphql.auth.schema.json': {
    schema: `${process.env.ZONOS_AUTH_GRAPH_URL}`,
    plugins: ['introspection'],
  },
} satisfies GenerateConfig;
