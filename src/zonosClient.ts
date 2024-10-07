import { zonosClientRequest } from './_zonosClientRequest';
import type {
  ZonosCatalogItemQueryVariables,
  ZonosClassificationsCalculateMutationVariables,
  ZonosFullLandedCostMutationVariables,
} from './types/generated/graphql.customer.types';

/**
 * @description
 * This function provides an interface with examples for making requests to the Zonos Graph.
 * @example
 *  // Replace 'your_credential_token' with your actual Zonos API credential token
 *  const credentialToken = 'your_credential_token';
 *  const variables = { productId: 'test-product-id', sku: 'test-sku' };
 *  const { json, errors } = await zonosClient.catalogItem({ credentialToken, variables });
 */
export const zonosClient = {
  /**
   * @description
   * This is used for legacy to fetch the catalog item.
   * @example
   *
   * const variables: ZonosCatalogItemQueryVariables = {
   *   id: 'catalog_item_7a628c98-9ded-48c8-8831-b227f919e25d',
   *   productId: 'test',
   *   sku: 'test',
   * };
   * const { json, errors } =
   *   await client.getCatalogItem({
   *     credentialToken: 'test_token',
   *     variables
   *   });
   */
  catalogItem: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosCatalogItemQueryVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'catalogItem',
    }),
  /**
   * @description
   * This mutation is used to classify an item.
   * @example
   *  const variables: ZonosClassificationsCalculateMutationVariables = {
   *     inputs: [{ name: 'backpack' }],
   *  };
   *  const { json, errors } =
   *    await client.classificationsCalculate({
   *      credentialToken: 'test_token',
   *      variables
   *    });
   */
  classificationsCalculate: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosClassificationsCalculateMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'classificationsCalculate',
    }),  /**
   * @description
   * This mutation is the workflow that comprises of 6 different mutations:
   * partyCreateWorkflow (destination, payor, and origin)
   * itemCreateWorkflow
   * cartonizationWorkflow
   * shipmentRatingCreateWorkflow
   * landedCostCalculateWorkflow
   * @example
   * const variables: ZonosFullLandedCostMutationVariables = {
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
   *   shipmentRatingCreateWorkflowInput: {
   *   amount: 20,
   *   currencyCode: 'USD',
   *   displayName: 'USPS Priority Express International',
   *   serviceLevelCode: 'usps.priority_express_international',
   *   },
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
   *
   * const { errors: clientErrors, json: clientJson } =
   *   await zonosClient.fullLandedCost({
   *     credentialToken: 'test_token',
   *     variables,
   *   });
   */
  landedCostOnly: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosFullLandedCostMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'fullLandedCost',
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
   * const variables: ZonosFullLandedCostMutationVariables = {
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
   *
   * const { errors: clientErrors, json: clientJson } =
   *   await zonosClient.fullLandedCost({
   *     credentialToken: 'test_token',
   *     variables,
   *   });
   */
  fullLandedCost: async (params: {
    credentialToken: string;
    customFetch?: typeof fetch;
    customUrl?: string;
    headers?: HeadersInit;
    variables: ZonosFullLandedCostMutationVariables;
  }) =>
    zonosClientRequest({
      ...params,
      operationName: 'fullLandedCost',
    }),
};
