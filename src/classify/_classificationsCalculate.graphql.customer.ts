import { gql } from 'graphql-request';

export const classificationsCalculate = gql`
  mutation classificationsCalculate($inputs: [ClassificationCalculateInput!]!) {
    classificationsCalculate(input: $inputs) {
      confidenceScore
      hsCode {
        code
      }
    }
  }
`;
