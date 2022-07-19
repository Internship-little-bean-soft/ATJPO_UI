import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation Mutation($registerInput: RegisterInput) {
    registerUser(registerInput: $registerInput) {
      id
      username
      email
      password
      token
    }
  }
`;