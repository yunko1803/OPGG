import './MatchSummoners.scss';

import React from 'react';
import classNames from 'classnames';
import { FellowPlayer } from '../models';
import MatchSummoner from './MatchSummoner';

type Props = {
  className?: string;
  players: FellowPlayer[];
  summoner: string;
};

const MatchSummoners: React.FC<Props> = ({ className, players, summoner }) => {

  return (
    <div className={classNames('MatchSummoners', className)}>
      {players.map((player, i) => (
        <MatchSummoner
          key={i}
          player={player}
          summoner={summoner}
        />
      ))}
    </div>
  );
};

export default MatchSummoners;
