import { describe, test } from 'vitest';

import { getZonosClient } from 'src/getZonosClient';
import { mockedFetch } from 'src/testUtils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  CatalogItemQuery,
  CatalogItemQueryVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClientRequest } from 'src/zonosClientRequest';

describe('catalogItem data', () => {
  const data: CatalogItemQuery = {
    catalogItem: {
      attributes: [
        {
          key: 'customization',
          value: null,
        },
        {
          key: 'fabricContent',
          value: null,
        },
        {
          key: 'color',
          value: null,
        },
        {
          key: 'size',
          value: null,
        },
        {
          key: 'category',
          value: null,
        },
        {
          key: 'id',
          value: '4776859',
        },
        {
          key: 'unitPriceHide',
          value: null,
        },
        {
          key: 'status',
          value: null,
        },
        {
          key: 'ltlClass',
          value: null,
        },
        {
          key: 'shippingAmount',
          value: null,
        },
        {
          key: 'shipFromLocation',
          value: null,
        },
        {
          key: 'pickingLocation',
          value: null,
        },
        {
          key: 'descriptionDetailed',
          value: null,
        },
      ],
      brand: null,
      catalogItemReferences: [],
      catalogItemUrl: null,
      countryOfOrigin: null,
      description: null,
      hsCode: null,
      hsCodes: [],
      id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
      itemType: 'PHYSICAL_GOOD',
      material: null,
      measurements: null,
      metadata: [
        {
          key: 'LegacyId',
          value: '4776859',
        },
        {
          key: 'LegacySource',
          value: 'ItemOverride',
        },
        {
          key: 'LegacySku',
          value: 'test',
        },
        {
          key: 'LegacyProductId',
          value: 'test',
        },
        {
          key: 'metadata',
          value: null,
        },
      ],
      packingPreference: null,
      productId: 'test',
      restrictedCountries: [],
      sku: 'test',
    },
  };
  const variables: CatalogItemQueryVariables = {
    id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
    productId: 'test',
    sku: 'test',
  };

  test('zonosClientRequest', async () => {
    const { errors, json } = await zonosClientRequest({
      customFetch: async () => mockedFetch({ response: { data } }),
      operationName: 'catalogItem',
      token: 'test_token',
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });

  test('zonosClient', async () => {
    const zonosClient = getZonosClient({
      customFetch: async () => mockedFetch({ response: { data } }),
      token: 'test-token',
    });
    const { errors: clientErrors, json: clientJson } =
      await zonosClient.catalogItem({ variables });
    expect(clientJson).toEqual(data);
    expect(clientErrors).toMatchInlineSnapshot(`[]`);
  });
});

describe('catalogItem error', () => {
  const variables: CatalogItemQueryVariables = {
    id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
    productId: 'test',
    sku: 'test',
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
      operationName: 'catalogItem',
      token: 'test-token',
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });

  test('zonosClient', async () => {
    const zonosClient = getZonosClient({ customFetch, token: 'test_token' });
    const { errors: clientErrors, json: clientJson } =
      await zonosClient.catalogItem({ variables });
    expect(clientJson).toBeNull();
    expect(clientErrors).toEqual([error]);
  });
});
