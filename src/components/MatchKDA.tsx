import './MatchKDA.scss';

import React from 'react';
import classNames from 'classnames';
import { GameInfoStats } from '../models/index';
import MatchBadge from './MatchBadge';

type Props = {
  className?: string;
  stats: GameInfoStats;
  isWin: boolean;
};

const MatchKDA: React.FC<Props> = ({ className, stats, isWin }) => {
  const general = stats.general;
  const badges = [general.largestMultiKillString, general.opScoreBadge];

  return (
    <div className={classNames('MatchKDA', className)}>
      <div className="MatchKDA__detail">
        {general.kill}
        <span className="MatchKDA__detail__slash">
          {' / '}
        </span>
        <span className="MatchKDA__detail__death">
          {general.death}
        </span>
        <span className="MatchKDA__detail__slash">
          {' / '}
        </span>
        {general.assist}
      </div>
      <div className="MatchKDA__score">
        {general.kdaString}
        {' '}
        <span className="MatchKDA__score__unit">
          평점
        </span>
      </div>
      <div className="MatchKDA__badges">
        {!!badges[0] && (
          <MatchBadge
            isWin={isWin}
            killBadge={general.largestMultiKillString}
          />
        )}
        {!!badges[1] && (
          <MatchBadge
            isWin={isWin}
            mvpBadge={general.opScoreBadge}
          />
        )}
      </div>
    </div>
  );
};

export default MatchKDA;
