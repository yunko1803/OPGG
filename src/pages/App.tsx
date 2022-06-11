import React, { useState, useEffect } from 'react';
import { Nullable, Summoner } from '../models/index';
import { get } from '../apis/request';
import Border from '../components/Border';
import Header from '../containers/Header';
import PlayerInfo from '../containers/PlayerInfo';
import PlayerBasicInfo from '../containers/PlayerBasicInfo';
import './App.scss';

function App() {
  const [name, setName] = useState('');
  const [summonerBasicData, setSummonerBasicData] = useState<Nullable<Summoner>>(null);

  useEffect(() => {
    loadSummonerBasicData();
  }, [name])

  return (
    <div className="App">
      <Header
        onSubmitClick={onSubmitClick}
      />
      <PlayerBasicInfo
        summonerBasicData={summonerBasicData}
      />
      <Border />
      <PlayerInfo />
    </div>
  );

  function onSubmitClick(summonerName: string) {
    setName(summonerName);
  }

  async function loadSummonerBasicData() {
    if (!name) return;

    const link = 'https://codingtest.op.gg/api/summoner/' + name;
    const rep = await get<Summoner>(link);
    setSummonerBasicData(rep);
  }
}

export default App;
