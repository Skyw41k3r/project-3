import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import NavBar from './components/NavBar'

//add apollo
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
          <Route exact path='/About' component={Contact} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        </>
      </Router> 
      </ApolloProvider>
    );
  }
  
  export default App;
  