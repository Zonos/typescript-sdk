import { gql } from 'graphql-request';

export const cartonizeWorkflow = gql`
  mutation cartonizeWorkflow {
    partyCreateWorkflow(input: []) {
      id
    }
    itemCreateWorkflow(input: []) {
      id
    }
    cartonizeWorkflow {
      dimensionalUnit
      height
      id
      items {
        item {
          id
          productId
        }
        quantity
      }
      length
      packagingOption {
        name
      }
      weight
      weightUnit
      width
    }
  }
`;
