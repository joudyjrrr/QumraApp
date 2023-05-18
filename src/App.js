import React from 'react';
import Header from './components/TopHeader/Header'
import Home from './components/MiddleHome/Home'
import WhoUs from './components/Who/WhoUS'
import Servises from './components/ParentServises/Servises'
import Company from './components/ParentsCompain/Company'
import Footer from './components/BottomFootar/Footer'
import State from './components/MiddleState/State'
// import { Routes, Route } from "react-router-dom";
// import { Route , Routes } from 'react-router-dom';
function App() {


  return (
    <div>
  <Header/>
  <Home/> 
  <WhoUs />
  <State/>
  <Servises/>
  <Company/>
  <Footer/>  
  </div>
  )
}

export default App;
