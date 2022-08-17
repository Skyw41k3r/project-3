import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import NavBar from './components/NavBar';
import Login from './pages/Login'
import 'antd/dist/antd.css';
import './App.css';

//main page export
function App() {
    return (
      <ApolloProvider client={ApolloClient}>
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
  