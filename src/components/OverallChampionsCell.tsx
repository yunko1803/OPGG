import './OverallChampionsCell.scss';

import React from 'react';
import classNames from 'classnames';
import { MostChampion } from '../models/index';

type Props = {
  className?: string;
  champion: MostChampion;
};

const OverallChampionsCell: React.FC<Props> = ({ className, champion }) => {
  const kda = (champion.kills + champion.assists) / champion.deaths;
  const kdaFormatted = kda.toFixed(2) + ':1 평점';
  const winRate = Math.floor((champion.wins / champion.games) * 100) + '%';
  const isWinRateHigh = Math.floor((champion.wins / champion.games) * 100) > 60;
  const kdaColor = selectKDAColor(kda);

  return (
    <div className={classNames('OverallChampionsCell', className)}>
      <img
        className="OverallChampionsCell__img"
        src={champion.imageUrl}
        width="45"
        height="45"
        alt="champion img"
      />
      <div className="OverallChampionsCell__champion">
        <div className="OverallChampionsCell__champion__name">
          {champion.name}
        </div>
        <div className="OverallChampionsCell__champion__cs">
          {`CS ${champion.cs} (2.4)`}
        </div>
      </div>
      <div className="OverallChampionsCell__kda">
        <div
          className="OverallChampionsCell__kda__score"
          style={{ color: kdaColor }}
        >
          {kdaFormatted}
        </div>
        <div className="OverallChampionsCell__kda__detail">
          {`${champion.kills} / ${champion.deaths} / ${champion.assists}`}
        </div>
      </div>
      <div className="OverallChampionsCell__winrate">
        <div className={classNames('OverallChampionsCell__winrate__percent', {
          'OverallChampionsCell__winrate__percent--elite': isWinRateHigh
        })}>
          {winRate}
        </div>
        <div className="OverallChampionsCell__winrate__total">
          {`${champion.games}게임`}
        </div>
      </div>
    </div>
  );

  function selectKDAColor(kda: number) {
    if (kda >= 5)
      return '#e19205';
    else if (kda >= 4)
      return '#1f8ecd';
    else if (kda >= 3)
      return '#2daf7f';
    else
      return '#5e5e5e';
  }
};

export default OverallChampionsCell;
