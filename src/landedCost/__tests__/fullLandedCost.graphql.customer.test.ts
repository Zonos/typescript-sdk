import { getZonosClient } from 'src/getZonosClient';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import { IResponseError } from 'src/types';
import {
  FullLandedCostMutation,
  FullLandedCostMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClientRequest } from 'src/zonosClientRequest';

describe('fullLandedCost data', () => {
  const data: FullLandedCostMutation = {
    partyCreateWorkflow: [
      {
        id: 'party_22297ddd-aed3-4873-b35c-76f1338fbd5d',
        location: {
          administrativeArea: '',
          administrativeAreaCode: 'QC',
          countryCode: 'CA',
          line1: '4398 St Laurent av',
          locality: 'Montreal',
          postalCode: 'H2W 1Z5',
        },
        type: 'ORIGIN',
      },
      {
        id: 'party_51818d6a-be81-42f7-9d28-2fd2e8e46955',
        location: {
          administrativeArea: '',
          administrativeAreaCode: '',
          countryCode: 'GB',
          line1: 'location line 1',
          locality: '',
          postalCode: 'SW1W 0NY',
        },
        type: 'DESTINATION',
      },
    ],
    itemCreateWorkflow: [
      {
        amount: 3,
        countryOfOrigin: 'CN',
        description: 'Backpack',
        hsCode: '4202.92',
        id: 'item_2eabf875-6113-4af5-b7ef-822997e3c4b1',
        productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
        quantity: 1,
        restriction: null,
      },
    ],
    cartonizeWorkflow: [
      {
        id: 'carton_1eaa7441-3b0b-4a31-b495-a2ee7528dbc0',
      },
    ],
    shipmentRatingCalculateWorkflow: [
      {
        id: 'shipment_rating_e85628d6-8c44-4a7d-a1a7-3c45b7fcf52b',
      },
      {
        id: 'shipment_rating_ee3c88e0-5810-4f87-9633-7b59b6b96705',
      },
      {
        id: 'shipment_rating_345ad473-cfc3-4fd1-ba09-d04c167079db',
      },
      {
        id: 'shipment_rating_3f235c88-ec20-4f47-850c-951e1ec24e6a',
      },
    ],
    landedCostCalculateWorkflow: null,
  };

  const variables: FullLandedCostMutationVariables = {
    partyCreateWorkflowInput: [
      {
        location: {
          administrativeArea: '',
          administrativeAreaCode: 'QC',
          countryCode: 'CA',
          line1: '4398 St Laurent av',
          line2: ' ',
          locality: 'Montreal',
          postalCode: 'H2W 1Z5',
        },
        type: 'ORIGIN',
      },
      {
        location: {
          administrativeArea: '',
          administrativeAreaCode: '',
          countryCode: 'GB',
          line1: 'location line 1',
          locality: '',
          postalCode: 'SW1W 0NY',
        },
        type: 'DESTINATION',
      },
    ],
    itemCreateWorkflowInput: [
      {
        amount: 3,
        countryOfOrigin: 'CN',
        currencyCode: 'USD',
        description: 'Backpack',
        hsCode: '4202.92',
        productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
        quantity: 1,
      },
    ],
    landedCostCalculateWorkflowInput: {
      calculationMethod: 'DDP',
      endUse: 'NOT_FOR_RESALE',
      tariffRate: 'ZONOS_PREFERRED',
    },
  };

  test('zonosClientRequest', async () => {
    const { json, errors } = await zonosClientRequest({
      operationName: 'fullLandedCost',
      customFetch: async () => mockedFetch({ response: { data } }),
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
    const { json: clientJson, errors: clientErrors } =
      await zonosClient.fullLandedCost({ variables });
    expect(clientJson).toEqual(data);
    expect(clientErrors).toMatchInlineSnapshot(`[]`);
  });
});

describe('fullLandedCost error', () => {
  const variables: FullLandedCostMutationVariables = {
    partyCreateWorkflowInput: [
      {
        location: {
          administrativeArea: '',
          administrativeAreaCode: 'QC',
          countryCode: 'CA',
          line1: '4398 St Laurent av',
          line2: ' ',
          locality: 'Montreal',
          postalCode: 'H2W 1Z5',
        },
        type: 'ORIGIN',
      },
      {
        location: {
          administrativeArea: '',
          administrativeAreaCode: '',
          countryCode: 'GB',
          line1: 'location line 1',
          locality: '',
          postalCode: 'SW1W 0NY',
        },
        type: 'DESTINATION',
      },
    ],
    itemCreateWorkflowInput: [
      {
        amount: 3,
        countryOfOrigin: 'CN',
        currencyCode: 'USD',
        description: 'Backpack',
        hsCode: '4202.92',
        productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
        quantity: 1,
      },
    ],
    landedCostCalculateWorkflowInput: {
      calculationMethod: 'DDP',
      endUse: 'NOT_FOR_RESALE',
      tariffRate: 'ZONOS_PREFERRED',
    },
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
      operationName: 'fullLandedCost',
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
      await zonosClient.fullLandedCost({ variables });
    expect(clientJson).toEqual(null);
    expect(clientErrors).toEqual([error]);
  });
});
