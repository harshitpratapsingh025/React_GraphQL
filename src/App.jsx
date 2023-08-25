import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import { Registration } from './container/pages/Registration/index';
import { LoginForm } from './container/pages/Login/index';
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
      element: <Registration />,
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
