
import './App.css';
import Navbar from './componenet/navbar/Navbar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import SignUp from './pages/SignUp';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' exact  element={<Home />} />
        <Route path='/product'   element={<Product />} />
        <Route path='/services'   element={<Service />} />
        <Route path='/sign-up'   element={<SignUp />} />
      </Routes>
        
     </BrowserRouter>
    </>
  );
}

export default App;
