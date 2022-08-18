import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//import apollo components and set up client
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client'
// use a client variable to gate app
const client = new ApolloClient({
    uri: 'https://localhost:5001/graphql',
    cache: new InMemoryCache(),
  });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  );

