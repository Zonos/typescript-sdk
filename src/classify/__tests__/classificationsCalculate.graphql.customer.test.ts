import { describe, test } from 'vitest';

import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosClassificationsCalculateMutation,
  ZonosClassificationsCalculateMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClient } from 'src/zonosClient';

const credentialToken = 'test_token';

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

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.classificationsCalculate({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
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

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.classificationsCalculate({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});
