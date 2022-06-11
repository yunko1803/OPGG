import React, { useState } from 'react';
import Header from '../containers/Header';
import PlayerInfo from '../containers/PlayerInfo';
import PlayerQuickInfo from '../containers/PlayerQuickInfo';
import './App.scss';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Header name={name} handleChangeName={handleChangeName} />
      <PlayerQuickInfo />
      <PlayerInfo />
    </div>
  );

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const summonerName = e.target.value;
    setName(summonerName);
  }
}

export default App;
