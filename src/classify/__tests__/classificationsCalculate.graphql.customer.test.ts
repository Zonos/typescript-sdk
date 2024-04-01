import { getZonosClient } from 'src/getZonosClient';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import { IResponseError } from 'src/types';
import {
  ClassificationsCalculateMutation,
  ClassificationsCalculateMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClientRequest } from 'src/zonosClientRequest';

describe('classificationsCalculate data', () => {
  const data: ClassificationsCalculateMutation = {
    classificationsCalculate: [
      {
        confidenceScore: 0.623,
        hsCode: {
          code: '4202.92',
        },
      },
    ],
  };
  const variables: ClassificationsCalculateMutationVariables = {
    inputs: [{ name: 'backpack' }],
  };

  test('zonosClientRequest', async () => {
    const { json, errors } = await zonosClientRequest({
      operationName: 'classificationsCalculate',
      customFetch: async () => mockedFetch({ response: { data } }),
      token: 'test token',
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
    const { json: clientJson, errors: clientErrors } =
      await zonosClient.classificationsCalculate({ variables });
    expect(clientJson).toEqual(data);
    expect(clientErrors).toMatchInlineSnapshot(`[]`);
  });
});

describe('classificationsCalculate error', () => {
  const variables: ClassificationsCalculateMutationVariables = {
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
    const { json, errors } = await zonosClientRequest({
      operationName: 'classificationsCalculate',
      customFetch,
      token: 'test_token',
      variables,
    });
    expect(json).toEqual(null);
    expect(errors).toEqual([error]);
  });

  test('zonosClient', async () => {
    const zonosClient = getZonosClient({ token: 'test_token', customFetch });
    const { json: clientJson, errors: clientErrors } =
      await zonosClient.classificationsCalculate({ variables });
    expect(clientJson).toEqual(null);
    expect(clientErrors).toEqual([error]);
  });
});
