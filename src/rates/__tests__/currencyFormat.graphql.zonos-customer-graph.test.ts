import { gqlRequest } from 'src/gqlRequest';

test('root/currencyFormat error', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'zonos-customer-graph/currencyFormat',
    customFetch: async () =>
      JSON.stringify({
        data: null,
        errors: [
          {
            extensions: {
              errorType: 'INTERNAL',
            },
            locations: [],
            message:
              'javax.ws.rs.NotAuthorizedException: HTTP 401 Unauthorized',
            path: ['currencyFormat'],
          },
        ],
      }),
    variables: { input: 'AED' },
  });
  expect(json).toMatchInlineSnapshot(`null`);
  expect(errors).toMatchInlineSnapshot(`
    [
      {
        "message": "{}",
      },
    ]
  `);
});
