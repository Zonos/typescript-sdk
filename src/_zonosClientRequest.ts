import { ClientError, GraphQLClient } from 'graphql-request';
import type { GraphQLError } from 'graphql-request/dist/types';

import { getSdk, type Sdk } from 'src/types/generated/graphql.customer.types';

type OperationName = keyof Sdk;
/**
 * Convert the directed positional arguments for each sdk method into an object while
 * maintaining optional parameters.
 */
type SdkMethodVariables<O extends OperationName> = Parameters<Sdk[O]>[0] &
  undefined extends never
  ? { variables: Parameters<Sdk[O]>[0] }
  : { variables?: Parameters<Sdk[O]>[0] };

type ReqParams<O extends OperationName> = {
  /** @param credentialToken The token used to authenticate with the Zonos Graph */
  credentialToken: string;
  /**
   * @param customFetch Optional custom fetch function to send your own request,
   * or insert middleware between the generated query and the request.
   * */
  customFetch?: typeof fetch;
  /** @param customUrl Optional custom URL to use for the request instead of the built-in URL */
  customUrl?: string;
  /** @param headers Optional additional headers for the request */
  headers?: HeadersInit;
  /** @param operationName The name of the operation to call on the graph */
  operationName: O;
} & SdkMethodVariables<O>;

type ReqReturnJson<O extends OperationName> = Awaited<ReturnType<Sdk[O]>>;

type ReqReturn<O extends OperationName> = {
  errors: GraphQLError[];
  json: ReqReturnJson<O> | null;
};

/**
 * @description
 * This function is a wrapper around the generated graphql sdk to handle errors and
 * provide a consistent interface for making requests to the Zonos Graph.
 * @example
 * const { json, errors } = await zonosClientRequest({
 *   operationName: 'catalogItem',
 *   credentialToken: 'test_token',
 *   variables: { productId: 'test-product-id', sku: 'test-sku' },
 * });
 */
export const zonosClientRequest = async <O extends OperationName>({
  credentialToken,
  customFetch,
  customUrl,
  headers,
  operationName,
  variables,
}: ReqParams<O>): Promise<ReqReturn<O>> => {
  const client = new GraphQLClient(
    customUrl || process.env.CUSTOMER_GRAPH_URL || '',
    {
      fetch: customFetch || fetch,
    }
  );
  const sdk = getSdk(client);
  const sdkMethod = sdk[operationName];
  try {
    // @ts-ignore
    const json: GQLReturnJson<E> = await sdkMethod(variables, {
      credentialToken,
      ...headers,
    });
    return { errors: [], json };
  } catch (e) {
    if (e instanceof ClientError) {
      return {
        errors: e.response.errors || [{ message: 'Unknown graphql error' }],
        json: null,
      };
    }
    return { errors: [{ message: JSON.stringify(e) }], json: null };
  }
};
