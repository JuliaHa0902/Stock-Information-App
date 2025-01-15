import { Outlet } from 'react-router';
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
