import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects className="card" />
    </div>
  );
}

export default App;
