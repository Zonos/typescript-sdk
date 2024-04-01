import {
  CatalogItemQueryVariables,
  ClassificationsCalculateMutationVariables,
  FullLandedCostMutationVariables,
} from './types/generated/graphql.customer.types';
import { zonosClientRequest } from './zonosClientRequest';

/**
 * @description
 * This function is a wrapper around zonosClientRequest to provide a more user-friendly
 * interface for making requests to the Zonos Graph.
 * @param token your credential token to access the Zonos Graph
 * @param customFetch a custom fetch function to use instead of the default fetch
 * @example
 *  const zonosClient = getZonosClient({ token: 'test-token' });
 *  const variables = { productId: 'test-product-id', sku: 'test-sku' };
 *  const { json, errors } = await zonosClient.catalogItem({ variables });
 */
export const getZonosClient = ({
  customFetch,
  token,
}: {
  token: string;
  customFetch?: () => Promise<unknown>;
}) => ({
  /**
   * @description
   * This is used for legacy to fetch the catalog item.
   * @example
   *
   * const variables: CatalogItemQueryVariables = {
   *   id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
   *   productId: 'test',
   *   sku: 'test',
   * };
   * const { json, errors } = await client.getCatalogItem({ variables });
   */
  catalogItem: async ({
    variables,
  }: {
    variables: CatalogItemQueryVariables;
  }) =>
    zonosClientRequest({
      operationName: 'catalogItem',
      customFetch,
      token,
      variables,
    }),
  /**
   * @description
   * This mutation is the workflow that comprises of 6 different mutations:
   * partyCreateWorkflow (destination, payor, and origin)
   * itemCreateWorkflow
   * cartonizationWorkflow
   * shipmentRatingCalculateWorkflow
   * landedCostCalculateWorkflow
   * @example
   * const variables: FullLandedCostMutationVariables = {
   *   partyCreateWorkflowInput: [
   *     {
   *       location: {
   *         administrativeArea: '',
   *         administrativeAreaCode: 'QC',
   *         countryCode: 'CA',
   *         line1: '4398 St Laurent av',
   *         line2: ' ',
   *         locality: 'Montreal',
   *         postalCode: 'H2W 1Z5',
   *       },
   *       type: 'ORIGIN',
   *     },
   *     {
   *       location: {
   *         administrativeArea: '',
   *         administrativeAreaCode: '',
   *         countryCode: 'GB',
   *         line1: 'location line 1',
   *         locality: '',
   *         postalCode: 'SW1W 0NY',
   *       },
   *       type: 'DESTINATION',
   *     },
   *   ],
   *   itemCreateWorkflowInput: [
   *     {
   *       amount: 3,
   *       countryOfOrigin: 'CN',
   *       currencyCode: 'USD',
   *       description: 'Backpack',
   *       hsCode: '4202.92',
   *       productId: 'e89861c0-f04e-11ee-bc4f-4b0822420556',
   *       quantity: 1,
   *     },
   *   ],
   *   landedCostCalculateWorkflowInput: {
   *     calculationMethod: 'DDP',
   *     endUse: 'NOT_FOR_RESALE',
   *     tariffRate: 'ZONOS_PREFERRED',
   *   },
   * };
   */
  fullLandedCost: async ({
    variables,
  }: {
    variables: FullLandedCostMutationVariables;
  }) =>
    zonosClientRequest({
      customFetch,
      operationName: 'fullLandedCost',
      token,
      variables,
    }),
  /**
   * @description
   * This mutation is used to classify an item.
   * @example
   *  const variables: ClassificationsCalculateMutationVariables = {
   *     inputs: [{ name: 'backpack' }],
   *  };
   *  const { json, errors } = await client.classificationsCalculate({ variables });
   */
  classificationsCalculate: async ({
    variables,
  }: {
    variables: ClassificationsCalculateMutationVariables;
  }) =>
    zonosClientRequest({
      customFetch,
      operationName: 'classificationsCalculate',
      token,
      variables,
    }),
});
