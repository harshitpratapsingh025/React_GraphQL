import { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CITY_STATE = gql`
  query getProject($id: ID!) {
    cityByState(stateId: $id) {
      name
    }
  }
`;
const UseAllCities = (state_id) => {
  const [allCities, setAllCities] = useState([]);
  const [getAllCity, { data }] = useLazyQuery(GET_CITY_STATE);
  useEffect(() => {
    if (state_id) {
      getAllCity({ variables: { id: state_id } });
    }
  }, [state_id]);
  return data?.cityByState;
};

export default UseAllCities;
