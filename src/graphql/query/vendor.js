import { gql } from '@apollo/client';

const GET_ALL_VENDOR = gql`
  query getAllVendor {
    vendors {
      id
      name
      email
      phone
      isActive
      isFeatured
      description
      address {
        city {
          name
        }
        state {
          name
        }
      }
    }
  }
`;

export { GET_ALL_VENDOR };
