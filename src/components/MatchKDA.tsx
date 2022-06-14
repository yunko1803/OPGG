import './MatchKDA.scss';

import React from 'react';
import classNames from 'classnames';
import { General } from '../models/index';
import MatchBadge from './MatchBadge';

type Props = {
  className?: string;
  stats: General;
  isWin: boolean;
};

const MatchKDA: React.FC<Props> = ({ className, stats, isWin }) => {
  const badges = [stats.largestMultiKillString, stats.opScoreBadge];

  return (
    <div className={classNames('MatchKDA', className)}>
      <div className="MatchKDA__detail">
        {stats.kill}
        <span className="MatchKDA__detail__slash">
          {' / '}
        </span>
        <span className="MatchKDA__detail__death">
          {stats.death}
        </span>
        <span className="MatchKDA__detail__slash">
          {' / '}
        </span>
        {stats.assist}
      </div>
      <div className="MatchKDA__score">
        {stats.kdaString}
        {' '}
        <span className="MatchKDA__score__unit">
          평점
        </span>
      </div>
      <div className="MatchKDA__badges">
        {!!badges[0] && (
          <MatchBadge
            isWin={isWin}
            killBadge={stats.largestMultiKillString}
          />
        )}
        {!!badges[1] && (
          <MatchBadge
            isWin={isWin}
            mvpBadge={stats.opScoreBadge}
          />
        )}
      </div>
    </div>
  );
};

export default MatchKDA;
