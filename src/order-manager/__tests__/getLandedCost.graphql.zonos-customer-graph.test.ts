import { gqlRequest } from 'src/gqlRequest';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import { IResponseError } from 'src/types';
import { GetLandedCostQuery } from 'src/types/generated/graphql.zonos-customer-graph.types';

test('zonos-customer-graph/getLandedCost data', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'zonos-customer-graph/getLandedCost',
    customFetch: async () =>
      mockedFetch({
        response: {
          data: {
            landedCost: {
              id: 'landed_cost_c94d059c-41ba-4bfd-b3d9-a605329d0d70',
              rootId: 'root_9561e03a-0a7d-455e-b67e-cd012842a5db',
            },
          } satisfies GetLandedCostQuery,
        },
      }),
    variables: {
      input: 'landed_cost_c94d059c-41ba-4bfd-b3d9-a605329d0d70',
    },
  });
  expect(json).toMatchInlineSnapshot(`
    {
      "landedCost": {
        "id": "landed_cost_c94d059c-41ba-4bfd-b3d9-a605329d0d70",
        "rootId": "root_9561e03a-0a7d-455e-b67e-cd012842a5db",
      },
    }
  `);
  expect(errors).toMatchInlineSnapshot(`[]`);
});

test('zonos-customer-graph/getLandedCost error', async () => {
  const { json, errors } = await gqlRequest({
    endpoint: 'zonos-customer-graph/getLandedCost',
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
    variables: {
      input: '1',
    },
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
