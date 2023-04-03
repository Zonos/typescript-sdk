import { gqlRequest } from 'src/gqlRequest';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import { IResponseError } from 'src/types';
import { CurrencyFormatQuery } from 'src/types/generated/graphql.zonos-customer-graph.types';

test('root/currencyFormat data', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'zonos-customer-graph/currencyFormat',
    customFetch: async () =>
      mockedFetch({
        response: {
          data: {
            currencyFormat: {
              decimalDelimiter: '.',
              thousandsDelimiter: ',',
              scale: 2,
              symbol: 'د.إ',
              symbolLocation: 'BEFORE',
            },
          } satisfies CurrencyFormatQuery,
        },
      }),
    variables: { input: 'AED' },
  });
  expect(json).toMatchInlineSnapshot(`
    {
      "currencyFormat": {
        "decimalDelimiter": ".",
        "scale": 2,
        "symbol": "د.إ",
        "symbolLocation": "BEFORE",
        "thousandsDelimiter": ",",
      },
    }
  `);
  expect(errors).toMatchInlineSnapshot(`[]`);
});

test('root/rootCreate error', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'zonos-customer-graph/rootCreate',
    customFetch: async () =>
      mockedFetch({
        ok: false,
        response: {
          data: null,
          errors: [
            {
              message:
                'HTTP Status 401 - Full authentication is required to access this resource',
            },
          ] satisfies IResponseError[],
        },
      }),
  });
  expect(json).toMatchInlineSnapshot(`null`);
  expect(errors).toMatchInlineSnapshot(`
    [
      {
        "message": "HTTP Status 401 - Full authentication is required to access this resource",
      },
    ]
  `);
});
