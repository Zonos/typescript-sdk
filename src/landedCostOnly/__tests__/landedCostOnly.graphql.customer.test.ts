import { describe, test } from 'vitest';

import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosLandedCostOnlyMutation,
  ZonosLandedCostOnlyMutationVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClient } from 'src/zonosClient';

const credentialToken = 'test_token';

describe('landedCostOnly data', () => {
  const data: ZonosLandedCostOnlyMutation = {
    cartonizeWorkflow: [
      {
        id: 'carton_1eaa7441-3b0b-4a31-b495-a2ee7528dbc0',
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
    landedCostCalculateWorkflow: null,
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
    shipmentRatingCreateWorkflow: {
      id: 'shipment_rating_e85628d6-8c44-4a7d-a1a7-3c45b7fcf52b',
    },
  };

  const variables: ZonosLandedCostOnlyMutationVariables = {
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
    shipmentRatingCreateWorkflowInput: {
      amount: 20,
      currencyCode: 'USD',
      displayName: 'custom:custom',
      serviceLevelCode: 'custom:custom',
    },
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.landedCostOnly({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('landedCostOnly error', () => {
  const variables: ZonosLandedCostOnlyMutationVariables = {
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
    shipmentRatingCreateWorkflowInput: {
      amount: 20,
      currencyCode: 'USD',
      displayName: 'Custom shipping',
      serviceLevelCode: 'custom:custom',
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

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.landedCostOnly({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});
