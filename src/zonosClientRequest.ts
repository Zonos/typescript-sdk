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
  customUrl?: string;
  operationName: O;
  requestHeaders?: Parameters<Sdk[O]>[1];
  token: string;
  customFetch?: () => Promise<unknown>;
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
 *   token: 'test-token',
 *   variables: { productId: 'test-product-id', sku: 'test-sku' },
 * });
 */
export const zonosClientRequest = async <E extends OperationName>({
  customFetch,
  customUrl,
  operationName,
  requestHeaders,
  token,
  variables,
}: ReqParams<E>): Promise<ReqReturn<E>> => {
  const client = new GraphQLClient(
    customUrl || `${process.env.CUSTOMER_GRAPH_URL}/${operationName}`,
    {
      fetch: customFetch || fetch,
    }
  );
  const sdk = getSdk(client);
  const sdkMethod = sdk[operationName];
  try {
    // @ts-ignore
    const json: GQLReturnJson<E> = await sdkMethod(variables, {
      ...requestHeaders,
      credentialToken: token,
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
