import './App.css';
import React from "react";
// import Store from './pages/navbar/Store';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import navbar from './components/navbar/navbar';
import Navbar from 'react-bootstrap/Navbar'


function App() {
  return (
    <><div class="container">
      <p>This is my first website!</p>
    </div><Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"></Navbar.Brand>

      </Navbar></>

  );
}



export default App;


