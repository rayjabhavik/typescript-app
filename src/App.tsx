import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import Message from './components/Message';
import Quantity from './components/Quantity';
import List from './components/List';
import Color from './components/Color';
import Clone from './components/Clone';
import Temp from './components/Temp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Nine from './components/Nine';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inputfield" element={<Inputfield />} />
          <Route path="/message" element={<Message />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/list" element={<List />} />
          <Route path="/color" element={<Color />} />
          <Route path="/clone" element={<Clone />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/nine" element={<Nine />} />

          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
