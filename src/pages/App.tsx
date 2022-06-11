import React from 'react';
import Header from '../containers/Header';
import PlayerInfo from '../containers/PlayerInfo';
import PlayerQuickInfo from '../containers/PlayerQuickInfo';
import './App.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <PlayerQuickInfo />
      <PlayerInfo />
    </div>
  );
}

export default App;
