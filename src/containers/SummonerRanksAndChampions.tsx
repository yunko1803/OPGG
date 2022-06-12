import './SummonerRanksAndChampions.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner } from '../models/index';
import RankResult from '../components/RankResult';
import ChampionWinningRate from '../components/ChampionWinningRate';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
};

const SummonerRanksAndChampions: React.FC<Props> = ({ className, summonerBasicData }) => {
  const summoner = summonerBasicData.summoner;

  return (
    <div className={classNames('SummonerRanksAndChampions', className)}>
      <RankResult rankData={summoner.leagues[0]} />
      <Spacer space={8} />
      <RankResult rankData={summoner.leagues[1]} />
      <Spacer space={8} />
      <ChampionWinningRate />
    </div>
  );
};

export default SummonerRanksAndChampions;
