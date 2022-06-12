import './RecentSevenDaysCell.scss';

import React from 'react';
import classNames from 'classnames';
import { ChampionWinRate } from '../models/index';

type Props = {
  className?: string;
  champion: ChampionWinRate;
};

const RecentSevenDaysCell: React.FC<Props> = ({ className, champion }) => {
  const winRate = Math.floor((champion.wins / (champion.wins + champion.losses)) * 100);

  return (
    <div className={classNames('RecentSevenDaysCell', className)}>
      <img
        className="RecentSevenDaysCell__img"
        src={champion.imageUrl}
        width="32"
        height="32"
        alt="champion img"
      />
      <div className="RecentSevenDaysCell__champion">
        {champion.name}
      </div>
      <div className="RecentSevenDaysCell__winrate">
        {winRate}%
      </div>
      <div className="RecentSevenDaysCell__bar">
        <div
          className="RecentSevenDaysCell__bar__win"
          style={{ flex: winRate / 100 }}
        >
          {`${champion.wins}승`}
        </div>
        <div
          className="RecentSevenDaysCell__bar__loss"
          style={{ flex: 1 - (winRate / 100) }}
        >
          {`${champion.losses}패`}
        </div>
      </div>
    </div>
  );
};

export default RecentSevenDaysCell;
