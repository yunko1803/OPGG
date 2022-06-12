import './SummonerRanksAndChampions.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner, MostInfoDTO } from '../models/index';
import RankResult from '../components/RankResult';
import ChampionWinningRate from '../components/ChampionWinningRate';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
  mostInfoData: MostInfoDTO;
};

const SummonerRanksAndChampions: React.FC<Props> = ({ className, summonerBasicData, mostInfoData }) => {
  const summoner = summonerBasicData.summoner;

  return (
    <div className={classNames('SummonerRanksAndChampions', className)}>
      <RankResult rankData={summoner.leagues[0]} />
      <Spacer space={8} />
      <RankResult rankData={summoner.leagues[1]} />
      <Spacer space={8} />
      <ChampionWinningRate mostInfoData={mostInfoData} />
    </div>
  );
};

export default SummonerRanksAndChampions;
