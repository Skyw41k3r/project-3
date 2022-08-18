import React from 'react';
import {
  ApolloClient,
  InMemoryCache, 
  ApolloProvider,
  gql,
  createHttpLink,} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import NavBar from './components/NavBar';
import Login from './pages/Login'
import 'antd/dist/antd.css';
import './App.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
}); 

//main page export
function App() {
    return (
      <ApolloProvider client={client}>
      <Router>
        <>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/Login' element={<Login />} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        </>
      </Router> 
      </ApolloProvider>
    );
  }
  
  export default App;
  