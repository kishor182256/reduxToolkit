import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';


const App: React.FC = () => (
  <>
  <Router>
  <Header/>
    <Routes>
    <Route  path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/welcome" element={<Welcome/>} />

    </Routes>
  </Router>
  <Footer/>
  </>
);

export default App;
