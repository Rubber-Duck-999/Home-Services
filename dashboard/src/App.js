import './App.css';
import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Navigation from './components/navigation';
import Home from './pages/Home';
import Sensor from './pages/Sensors';
import Alarm from './pages/Alarm';
import Mood from './pages/Mood';
import Devices from './pages/Devices';
import Network from './pages/Network';
import Faq from './pages/Faq';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/sensors" element={<Sensor />} />
        <Route path="/network" element={<Network />} />
        <Route path="/faqs" element={<Faq/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;