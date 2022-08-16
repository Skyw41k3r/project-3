import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import NavBar from './components/NavBar';

//main page export
function App() {
    return (
      <ApolloProvider client={ApolloClient}>
      <Router>
        <>
        <NavBar />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Blog' component={Blog} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        </>
      </Router> 
      </ApolloProvider>
    );
  }
  
  export default App;
  