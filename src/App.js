import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import Contact from './components/contact';
import Hero from './components/hero';
import Projects from './components/projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <Contact /> */}
      <Projects className="card" />
    </div>
  );
}

export default App;
