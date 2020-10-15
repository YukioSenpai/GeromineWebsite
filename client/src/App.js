import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

