import React from 'react';
import Searchbar from './components/searchbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Song from './pages/Song';
export default function App() {
  return (
    <div className="flex w-full h-full">
      <BrowserRouter>
        {/* <Searchbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song" element={<Song/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}
