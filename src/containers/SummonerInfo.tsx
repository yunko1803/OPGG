import './SummonerInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner } from '../models/index';
import SummonerRanksAndChampions from './SummonerRanksAndChampions';
import SummonerMatchInfo from './SummonerMatchInfo';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
};

const SummonerInfo: React.FC<Props> = ({ className, summonerBasicData }) => {
  return (
    <div className={classNames('SummonerInfo', className)}>
      <SummonerRanksAndChampions
        summonerBasicData={summonerBasicData}
      />
      <SummonerMatchInfo />
    </div>
  );
};

export default SummonerInfo;
