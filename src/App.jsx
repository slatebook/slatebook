import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TeamPage from './pages/TeamPage';
import Careers from './pages/Careers';

import WelcomeModal from './components/WelcomeModal';

const App = () => {
  return (
    <Router>
      <WelcomeModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Router>
  );
};

export default App;
