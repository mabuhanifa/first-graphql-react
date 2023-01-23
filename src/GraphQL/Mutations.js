import { gql } from "@apollo/client";

export const USER_MUTATION = gql`
  mutation createUser(
    $firstName: string!
    $lastName: string!
    $email: string!
    $password: string!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;
