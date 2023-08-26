import { gql } from '@apollo/client';

const GET_ALL_STATE = gql`
  query getState {
    allState {
      name
      id
    }
  }
`;

export { GET_ALL_STATE };
