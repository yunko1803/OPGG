import './SummonerInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner, MostInfoDTO } from '../models/index';
import SummonerRanksAndChampions from './SummonerRanksAndChampions';
import SummonerMatchInfo from './SummonerMatchInfo';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
  mostInfoData: MostInfoDTO;
};

const SummonerInfo: React.FC<Props> = ({ className, summonerBasicData, mostInfoData }) => {
  return (
    <div className={classNames('SummonerInfo', className)}>
      <SummonerRanksAndChampions
        summonerBasicData={summonerBasicData}
        mostInfoData={mostInfoData}
      />
      <SummonerMatchInfo />
    </div>
  );
};

export default SummonerInfo;
