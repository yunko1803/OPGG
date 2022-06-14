import './MatchCard.scss';

import React from 'react';
import classNames from 'classnames';
import { GameInfo } from '../models/index';
import MatchItems from './MatchItems';
import MatchSummoners from './MatchSummoners';
import MatchSummary from './MatchSummary';
import MatchChampion from './MatchChampion';
import MatchKDA from './MatchKDA';
import MatchIndicator from './MatchIndicator';

type Props = {
  className?: string;
  match: GameInfo;
};

const MatchCard: React.FC<Props> = ({ className, match }) => {

  return (
    <div className={classNames('MatchCard', className, {
      'MatchCard--win': match.isWin
    })}>
      <MatchSummary
        type={match.gameType}
        createDate={match.createDate}
        isWin={match.isWin}
        gameLength={match.gameLength}
      />
      <MatchChampion
        champion={match.champion}
        spells={match.spells}
        runes={match.peak}
      />
      <MatchKDA
        stats={match.stats.general}
        isWin={match.isWin}
      />
      <MatchIndicator
        championLevel={match.champion.level}
        stats={match.stats.general}
      />
      <MatchItems />
      <MatchSummoners />
      <MatchSummoners />
    </div>
  );
};

export default MatchCard;
