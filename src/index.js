import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Catalogue from './pages/Catalogue/Catalogue';
import About from './pages/About/About';
import Header from './parts/Header/Header';
import Footer from './parts/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/quienes-somos' element={<About />}/>
        <Route path='/catalogo' element={<Catalogue />}/>
        <Route path='/contacto' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
