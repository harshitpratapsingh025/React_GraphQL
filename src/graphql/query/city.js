import { gql } from '@apollo/client';

const GET_CITY_STATE = gql`
  query getProject($id: ID!) {
    cityByState(stateId: $id) {
      name
      id
    }
  }
`;

export { GET_CITY_STATE };
