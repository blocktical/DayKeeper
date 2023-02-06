import './App.css';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Aboutus from './Pages/aboutus';
import Home from './Pages/home';
import Writer from './Pages/writer';
import Reader from './Pages/reader';
import Bot from './Pages/bot';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/writer" element={<Writer />} />
          <Route exact path="/reader" element={<Reader />} />
          <Route exact path="/friend" element={<Bot />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
