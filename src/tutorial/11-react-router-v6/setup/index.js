import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
import Navbar from './Navbar';

const ReactRouterSetup = () => {

  return (

    <BrowserRouter>

    <Navbar />

    <Routes>

        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/people' element={<People />}></Route>
        <Route path="*" element={<Error/>}></Route>
        <Route path='/:id' element={<Person />}></Route>

      </Routes>

    </BrowserRouter>

  );


};

export default ReactRouterSetup;
