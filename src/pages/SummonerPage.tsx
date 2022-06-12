import './SummonerPage.scss';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Summoner } from '../models/index';
import { emptySummoner } from '../models/emptyData';
import { get } from '../apis/request';
import Border from '../components/Border';
import Header from '../containers/Header';
import SummonerInfo from '../containers/SummonerInfo';
import SummonerBasicInfo from '../containers/SummonerBasicInfo';
import Spacer from '../components/Spacer';

function SummonerPage() {
  const params = useParams();
  const [summonerBasicData, setSummonerBasicData] = useState<Summoner>(emptySummoner);
  const [isBasicDataLoading, setIsBasicDataLoading] = useState(false);

  useEffect(() => {
    loadSummonerBasicData();
  }, [params.summonerName])

  return (
    <div className="SummonerPage">
      <Header />
      <SummonerBasicInfo
        summonerBasicData={summonerBasicData}
        isLoading={isBasicDataLoading}
      />
      <Border />
      <Spacer space={10} />
      <SummonerInfo />
    </div>
  );

  async function loadSummonerBasicData() {
    if (!params.summonerName) return;

    setIsBasicDataLoading(true);
    const link = 'https://codingtest.op.gg/api/summoner/' + params.summonerName;
    const rep = await get<Summoner>(link);
    setSummonerBasicData(rep);
    setIsBasicDataLoading(false);
  }
}

export default SummonerPage;
