import { gql } from 'graphql-request';

export const CurrencyFormat = gql`
  query currencyFormat($input: CurrencyCode!) {
    currencyFormat(input: $input) {
      decimalDelimiter
      thousandsDelimiter
      scale
      symbol
      symbolLocation
    }
  }
`;
