import type { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations';

import type { GenerateConfig } from './codegen';

export const generateCustomer = {
  'src/types/generated/graphql.customer.types.ts': {
    schema: `${process.env.CUSTOMER_GRAPH_URL}`,
    documents: 'src/**/*.graphql.customer.ts',
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
} satisfies GenerateConfig;
