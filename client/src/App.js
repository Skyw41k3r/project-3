import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import NavBar from './components/NavBar';



function App() {
    return (
      <ApolloProvider client={ApolloClient}>
      <Router>
        <>
        <NavBar />
        <Routes>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog' component={Blog} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Routes>
        </>
      </Router> 
      </ApolloProvider>
    );
  }
  
  export default App;