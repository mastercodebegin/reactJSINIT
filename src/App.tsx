//import React from 'react';
//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './screen/login/Login';
import Dashboard from './screen/dashboard/Dashboard';
import UserManagement from './screen/usermanagement/UserManagement';

//import SpinnerHelper from './helpers/SpinnerHelper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/usermanagement' element={<Login />} />
    </Routes>
  )
}

export default App;
