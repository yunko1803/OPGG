import './MatchSummoner.scss';

import React from 'react';
import classNames from 'classnames';
import { FellowPlayer } from '../models';
import ChampionLogo from './ChampionLogo';

type Props = {
  className?: string;
  player: FellowPlayer;
  summoner: string;
};

const MatchSummoner: React.FC<Props> = ({ className, player, summoner }) => {
  const champion = player.champion;

  return (
    <div className={classNames('MatchSummoner', className)}>
      <ChampionLogo
        isCircle={false}
        width={16}
        height={16}
        imageUrl={champion.imageUrl}
      />
      <div className={classNames('MatchSummoner__name', {
        'MatchSummoner__name--myself': player.summonerName === summoner
      })}>
        {player.summonerName}
      </div>
    </div>
  );
};

export default MatchSummoner;
