import './SummonerRanksAndChampions.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const SummonerRanksAndChampions: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('SummonerRanksAndChampions', className)}>
    </div>
  );
};

export default SummonerRanksAndChampions;
