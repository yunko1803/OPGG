import './SummonerInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner, MostInfoDTO, MatchesDTO } from '../models/index';
import SummonerRanksAndChampions from './SummonerRanksAndChampions';
import SummonerMatchInfo from './SummonerMatchInfo';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
  mostInfoData: MostInfoDTO;
  matchesData: MatchesDTO;
};

const SummonerInfo: React.FC<Props> = ({ className, summonerBasicData, mostInfoData, matchesData }) => {
  return (
    <div className={classNames('SummonerInfo', className)}>
      <SummonerRanksAndChampions
        summonerBasicData={summonerBasicData}
        mostInfoData={mostInfoData}
      />
      <SummonerMatchInfo
        matchesData={matchesData}
      />
    </div>
  );
};

export default SummonerInfo;
