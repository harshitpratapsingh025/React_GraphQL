import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CITY_STATE } from './../../graphql/query/city';

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
