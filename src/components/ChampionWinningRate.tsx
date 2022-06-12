import './ChampionWinningRate.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const ChampionWinningRate: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('ChampionWinningRate', className)}>
    </div>
  );
};

export default ChampionWinningRate;