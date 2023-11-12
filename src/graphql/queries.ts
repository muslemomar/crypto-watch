import { gql } from "@apollo/client";

export const GET_CONVERSION_RATE = gql`
  query GetConversionRate($cryptoCode: String!) {
    cryptoToEuro(cryptoCode: $cryptoCode) {
      EUR
    }
  }
`;
