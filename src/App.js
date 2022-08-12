
import './App.css';
import Navbar from './componenet/navbar/Navbar';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' exact  element={<Home />} />
      </Routes>
        
     </BrowserRouter>
    </>
  );
}

export default App;
