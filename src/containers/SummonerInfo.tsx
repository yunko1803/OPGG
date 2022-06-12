import './SummonerInfo.scss';

import React from 'react';
import classNames from 'classnames';
import SummonerRanksAndChampions from './SummonerRanksAndChampions';
import SummonerMatchInfo from './SummonerMatchInfo';

type Props = {
  className?: string;
};

const SummonerInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('SummonerInfo', className)}>
      <SummonerRanksAndChampions />
      <SummonerMatchInfo />
    </div>
  );
};

export default SummonerInfo;
