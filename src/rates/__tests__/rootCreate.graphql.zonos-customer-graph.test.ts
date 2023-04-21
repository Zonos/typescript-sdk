import { gqlRequest } from 'src/gqlRequest';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import { IResponseError } from 'src/types';
import { RootCreateMutation } from 'src/types/generated/graphql.customer.types';

test('root/rootCreate data', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'customer/rootCreate',
    customFetch: async () =>
      mockedFetch({
        response: {
          data: {
            rootCreate: {
              id: 'root_b1eca9ea-eef0-4036-a44d-81666084670e',
            },
          } satisfies RootCreateMutation,
        },
      }),
  });
  expect(json).toMatchInlineSnapshot(`
    {
      "rootCreate": {
        "id": "root_b1eca9ea-eef0-4036-a44d-81666084670e",
      },
    }
  `);
  expect(errors).toMatchInlineSnapshot(`[]`);
});

test('root/rootCreate error', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'customer/rootCreate',
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
