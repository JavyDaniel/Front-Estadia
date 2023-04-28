import React from 'react';
import Navbar from './common/Navbar';
import './App.css';
import Dell from './pages/Dell';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Chat from './pages/Chat';
// import Footer from './components/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dell' element={<Dell/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/chat' element={<Chat/>}></Route>
          <Route path='/' element={<Home/>}></Route>

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
