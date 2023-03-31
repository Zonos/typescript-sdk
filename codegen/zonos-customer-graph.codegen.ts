import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateZonosCustomerGraph = {
  'src/types/generated/graphql.zonos-customer-graph.types.ts': {
    schema: `${process.env.ZONOS_CUSTOMER_GRAPH_URL}`,
    documents: 'src/**/*.graphql.zonos-customer-graph.ts',
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
      },
    } satisfies TypeScriptDocumentsPluginConfig,
  },
  'src/types/generated/graphql.zonos-customer-graph.schema.json': {
    schema: `${process.env.ZONOS_CUSTOMER_GRAPH_URL}`,
    plugins: ['introspection'],
  },
} satisfies GenerateConfig;
