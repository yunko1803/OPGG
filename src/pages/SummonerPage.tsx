import './SummonerPage.scss';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Summoner, MostInfoDTO, MatchesDTO } from '../models/index';
import { emptySummoner, emptyMostInfoDTO, emptyMatchesDTO } from '../models/emptyData';
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
  const [mostInfoData, setMostInfoData] = useState<MostInfoDTO>(emptyMostInfoDTO);
  const [matchesData, setMatchesData] = useState<MatchesDTO>(emptyMatchesDTO);
  const [isPastSummonersOpen, setIsPastSummonersOpen] = useState(false);
  const [isCurrentSummonerMenuOpen, setIsCurrentSummonerMenuOpen] = useState(false);
  const summonersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', (event: any) => {
      if (!summonersRef.current?.contains(event.target)) {
        setIsPastSummonersOpen(false);
        setIsCurrentSummonerMenuOpen(false);
      }
    });
    loadSummonerBasicData();
    loadMostInfoData();
    loadMatchesData();
  }, [params.summonerName]);

  return (
    <div className="SummonerPage">
      <Header
        summonersRef={summonersRef}
        isPastSummonersOpen={isPastSummonersOpen}
        handleIsPastSummonersOpen={setIsPastSummonersOpen}
        isCurrentSummonerMenuOpen={isCurrentSummonerMenuOpen}
        handleIsCurrentSummonerMenuOpen={setIsCurrentSummonerMenuOpen}
      />
      <SummonerBasicInfo
        summonerBasicData={summonerBasicData}
        isLoading={isBasicDataLoading}
      />
      <Border />
      <Spacer space={10} />
      <SummonerInfo
        summonerBasicData={summonerBasicData}
        mostInfoData={mostInfoData}
        matchesData={matchesData}
      />
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

  async function loadMostInfoData() {
    if (!params.summonerName) return;

    const link = `https://codingtest.op.gg/api/summoner/${params.summonerName}/mostInfo`;
    const rep = await get<MostInfoDTO>(link);
    setMostInfoData(rep);
  }

  async function loadMatchesData() {
    if (!params.summonerName) return;

    const link = `https://codingtest.op.gg/api/summoner/${params.summonerName}/matches`;
    const rep = await get<MatchesDTO>(link);
    setMatchesData(rep);
  }
}

export default SummonerPage;
