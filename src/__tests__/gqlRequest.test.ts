import { gqlRequest } from 'src/gqlRequest';

test('example request error', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'auth/getCredentialServiceToken',
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
            path: ['getCredentialServiceToken'],
          },
        ],
      }),
    variables: { input: { mode: 'LIVE', storeId: 3 } },
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
