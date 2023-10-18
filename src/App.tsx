import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Terms from './components/Terms/Terms';
import Policy from './components/Policy/Policy';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
