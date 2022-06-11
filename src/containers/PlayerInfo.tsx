import './PlayerInfo.scss';

import React from 'react';
import classNames from 'classnames';
import PlayerRanksAndChampions from './PlayerRanksAndChampions';
import PlayerMatchInfo from './PlayerMatchInfo';

type Props = {
  className?: string;
};

const PlayerInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('PlayerInfo', className)}>
      <PlayerRanksAndChampions />
      <PlayerMatchInfo />
    </div>
  );
};

export default PlayerInfo;
