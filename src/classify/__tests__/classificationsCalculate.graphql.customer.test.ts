import { describe, test } from 'vitest';

import { getZonosClient } from 'src/getZonosClient';
import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosClassificationsCalculateMutation,
  ZonosClassificationsCalculateMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClientRequest } from 'src/zonosClientRequest';

describe('classificationsCalculate data', () => {
  const data: ZonosClassificationsCalculateMutation = {
    classificationsCalculate: [
      {
        confidenceScore: 0.623,
        hsCode: {
          code: '4202.92',
        },
      },
    ],
  };
  const variables: ZonosClassificationsCalculateMutationVariables = {
    inputs: [{ name: 'backpack' }],
  };

  test('zonosClientRequest', async () => {
    const { errors, json } = await zonosClientRequest({
      customFetch: async () => mockedFetch({ response: { data } }),
      operationName: 'classificationsCalculate',
      token: 'test_token',
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });

  test('zonosClient', async () => {
    const zonosClient = getZonosClient({
      customFetch: async () => mockedFetch({ response: { data } }),
      token: 'test_token',
    });
    const { errors: clientErrors, json: clientJson } =
      await zonosClient.classificationsCalculate({ variables });
    expect(clientJson).toEqual(data);
    expect(clientErrors).toMatchInlineSnapshot(`[]`);
  });
});

describe('classificationsCalculate error', () => {
  const variables: ZonosClassificationsCalculateMutationVariables = {
    inputs: [{ name: 'backpack' }],
  };

  const error = {
    message:
      'HTTP Status 401 - Full authentication is required to access this resource',
  };

  const customFetch = async () =>
    mockedFetch({
      ok: false,
      response: {
        data: null,
        errors: [error] satisfies IResponseError[],
      },
    });

  test('zonosClientRequest', async () => {
    const { errors, json } = await zonosClientRequest({
      customFetch,
      operationName: 'classificationsCalculate',
      token: 'test_token',
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });

  test('zonosClient', async () => {
    const zonosClient = getZonosClient({ customFetch, token: 'test_token' });
    const { errors: clientErrors, json: clientJson } =
      await zonosClient.classificationsCalculate({ variables });
    expect(clientJson).toBeNull();
    expect(clientErrors).toEqual([error]);
  });
});
