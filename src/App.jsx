import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import { Registration } from './container/pages/Registration/index';
import { LoginForm } from './container/pages/Login/index';
import { Dashboard } from './container/pages/Dashboard/index';
import { VendorListing } from './container/pages/Vendor/vendorListing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginForm />,
    },
    {
      path: '/registration',
      element: <Registration />,
    },
    {
      path: '/dashbord',
      element: <Dashboard />,
    },
    {
      path: '/users',
      element: <Dashboard />,
    },
    {
      path: '/vendors',
      element: <VendorListing />,
    },
  ]);
  return (
    <>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </>
  );
}

export default App;
