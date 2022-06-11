import './PlayerRanksAndChampions.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const PlayerRanksAndChampions: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('PlayerRanksAndChampions', className)}>
    </div>
  );
};

export default PlayerRanksAndChampions;
