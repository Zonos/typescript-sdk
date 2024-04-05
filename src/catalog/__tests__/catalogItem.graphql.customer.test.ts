import { describe, test } from 'vitest';

import { mockedFetch } from 'src/test-utils/_mockedFetch';
import type { IResponseError } from 'src/types';
import type {
  ZonosCatalogItemQuery,
  ZonosCatalogItemQueryVariables,
} from 'src/types/generated/graphql.customer.types';
import { zonosClient } from 'src/zonosClient';

const credentialToken = 'test_token';

describe('catalogItem data', () => {
  const data: ZonosCatalogItemQuery = {
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
  const variables: ZonosCatalogItemQueryVariables = {
    id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
    productId: 'test',
    sku: 'test',
  };

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.catalogItem({
      credentialToken,
      customFetch: async () => mockedFetch({ response: { data } }),
      variables,
    });
    expect(json).toEqual(data);
    expect(errors).toMatchInlineSnapshot(`[]`);
  });
});

describe('catalogItem error', () => {
  const variables: ZonosCatalogItemQueryVariables = {
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

  test('zonosClient', async () => {
    const { errors, json } = await zonosClient.catalogItem({
      credentialToken,
      customFetch,
      variables,
    });
    expect(json).toBeNull();
    expect(errors).toEqual([error]);
  });
});
