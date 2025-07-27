import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./views/Home"
import Dashboard from './views/Dashboard';
import About from './views/About'; 
import Hackathon from './views/Hackathon';
import LandingPage from './views/LandingPage';
import Login from './views/Login'

const root=createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About/>} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
