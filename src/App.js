import './App.css';
// import react,{ useState } from 'react';
import React from 'react'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
import AboutMe from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import ContactMe from './components/ContactMe.js'
import Footer from './components/Footer.js'
import { BrowserRouter } from 'react-router-dom';


function App() {  
  return (
    <BrowserRouter>    
      <NavBar />
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

