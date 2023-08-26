import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_STATE } from './../../graphql/query/state';

const UseAllState = () => {
  const [allStates, setAllStates] = useState([]);
  const { data } = useQuery(GET_ALL_STATE);
  return data?.allState;
};

export default UseAllState;
