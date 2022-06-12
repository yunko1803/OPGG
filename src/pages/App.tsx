import React, { useState, useEffect } from 'react';
import { Nullable, Summoner } from '../models/index';
import { get } from '../apis/request';
import Border from '../components/Border';
import Header from '../containers/Header';
import SummonerInfo from '../containers/SummonerInfo';
import SummonerBasicInfo from '../containers/SummonerBasicInfo';
import './App.scss';
import Spacer from '../components/Spacer';

function App() {
  const [name, setName] = useState('');
  const [summonerBasicData, setSummonerBasicData] = useState<Nullable<Summoner>>(null);
  const [isBasicDataLoading, setIsBasicDataLoading] = useState(false);

  useEffect(() => {
    loadSummonerBasicData();
  }, [name])

  return (
    <div className="App">
      <Header
        onSubmitClick={onSubmitClick}
      />
      <SummonerBasicInfo
        summonerBasicData={summonerBasicData}
        isLoading={isBasicDataLoading}
      />
      <Border />
      <Spacer space={10} />
      <SummonerInfo />
    </div>
  );

  function onSubmitClick(summonerName: string) {
    setName(summonerName);
  }

  async function loadSummonerBasicData() {
    if (!name) return;

    setIsBasicDataLoading(true);
    const link = 'https://codingtest.op.gg/api/summoner/' + name;
    const rep = await get<Summoner>(link);
    setSummonerBasicData(rep);
    setIsBasicDataLoading(false);
  }
}

export default App;
