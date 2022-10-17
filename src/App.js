import './App.css';
import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductBlack from './pages/ProductBlack';
import ProductGray from './pages/ProductGray';
import ProductBlue from './pages/ProductBlue';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path="/products/:category" element={<ProductList/>}>
        </Route>
        <Route path="/ProductBlack/" element={<ProductBlack/>}>
        </Route>
        <Route path="/ProductGray/" element={<ProductGray/>}>
        </Route>
        <Route path="/ProductBlue/" element={<ProductBlue/>}>
        </Route>
        
      </Routes>
    </Router>
  );
};

export default App;
