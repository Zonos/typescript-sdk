import { gql } from 'graphql-request';

export const RootCreate = gql`
  mutation rootCreate {
    rootCreate {
      id
    }
  }
`;
