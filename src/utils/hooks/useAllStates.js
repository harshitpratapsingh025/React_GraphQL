import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_STATE = gql`
  query getState {
    allState {
      name
      id
    }
  }
`;
const UseAllState = () => {
  const [allStates, setAllStates] = useState([]);
  const { data } = useQuery(GET_ALL_STATE);
  console.log('data', data?.allState);
  return data?.allState;
};

export default UseAllState;
