import './App.scss';

import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import SummonerPage from './SummonerPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/summoners/:summonerName" element={<SummonerPage />}  />
      </Routes>
    </div>
  );
}

export default App;
