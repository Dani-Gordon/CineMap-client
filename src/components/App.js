import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import FilmsByContinent from './FilmsByContinent';

import '../styles/style.scss';
import FilmIndex from './FilmIndex';
import Login from './auth/Login.js';
import Register from './auth/Register.js';
<<<<<<< HEAD
import CreateFilm from './CreateFilm';
=======
import Navbar from './Navbar';
import MyFavourites from './MyFavourites';
import ShowFilm from './ShowFilm';
>>>>>>> main

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmIndex" element={<FilmIndex />} />
      <Route path="/film/continent/:continent" element={<FilmsByContinent />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
<<<<<<< HEAD
      <Route path="/create" element={<CreateFilm />} />
=======
      <Route path="/users/:userId/myFavourites" element={<MyFavourites />} />
      <Route path="/film/:filmId" element={<ShowFilm />} />
>>>>>>> main
    </Routes>
  </BrowserRouter>
);

export default App;
