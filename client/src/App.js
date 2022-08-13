import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';

//add apollo

import 