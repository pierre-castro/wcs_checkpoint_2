import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query Countries {
  countries {
    code
    emoji
    name
  }
}`;

export const GET_COUNTRY = gql`
  query Query($code: String!) {
  country(code: $code) {
    code
    emoji
    name
      continent {
      name
    }
  }
}`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    emoji
    name
  }
}`;