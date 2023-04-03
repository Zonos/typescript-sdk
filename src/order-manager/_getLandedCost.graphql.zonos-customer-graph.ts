import { gql } from 'graphql-request';

export const GetLandedCost = gql`
  query getLandedCost($input: ID!) {
    landedCost(id: $input) {
      id
      rootId
    }
  }
`;
