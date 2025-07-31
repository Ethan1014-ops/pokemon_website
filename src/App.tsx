import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Pokedex from './pages/Pokedex';
import CatchGuide from './pages/CatchGuide';
import Shop from './pages/Shop';
import Community from './pages/Community';
import './App.css';

// Component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/atrapalos" element={<CatchGuide />} />
            <Route path="/tienda" element={<Shop />} />
            <Route path="/comunidad" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;