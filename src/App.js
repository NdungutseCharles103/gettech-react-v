import React from 'react';
import './App.css';
import "boxicons/css/boxicons.css";
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div clasName="App">
       <Routes>
         <Route path='/' element={<Home />}/>
       </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
