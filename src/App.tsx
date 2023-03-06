import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles/app.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, AddNewMovie, LogIn, Movie, Movies, SignIn} from './pages'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addMovie' element={< AddNewMovie />}/>
          <Route path='/login' element={<LogIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
