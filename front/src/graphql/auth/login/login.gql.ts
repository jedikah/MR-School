import { gql } from "@apollo/client";
import { TokenDto } from "../../types";

export interface LoginData {
  login: TokenDto;
}

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;
