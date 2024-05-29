// src/App.js
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SignUp from './signup';
import SignIn from './signin';
import Dashboard from './dashboard';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
