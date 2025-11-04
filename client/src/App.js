import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import PropertyList from './components/PropertyList';
import PropertyDetail from './components/PropertyDetail';
import { FavoritesProvider } from './context/FavoritesContext';
import About from './components/About';
import Contact from './components/Contact';
import AddProperty from './components/AddProperty';
import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/properties" element={<PropertyList />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
