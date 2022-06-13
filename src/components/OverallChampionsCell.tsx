import './OverallChampionsCell.scss';

import React from 'react';
import classNames from 'classnames';
import { MostChampion } from '../models/index';
import { getKDAColor } from '../utils/functions';

type Props = {
  className?: string;
  champion: MostChampion;
};

const OverallChampionsCell: React.FC<Props> = ({ className, champion }) => {
  const summarizedKill = champion.kills / champion.games
  const summarizedDeath = champion.deaths / champion.games
  const summarizedAssist = champion.assists / champion.games
  const kda = (summarizedKill + summarizedAssist) / summarizedDeath;
  const kdaFormatted = kda.toFixed(2) + ':1 평점';
  const winRate = Math.floor((champion.wins / champion.games) * 100) + '%';
  const isWinRateHigh = Math.floor((champion.wins / champion.games) * 100) > 60;
  const kdaColor = getKDAColor(kda);

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
          {`${summarizedKill.toFixed(1)} / ${summarizedDeath.toFixed(1)} / ${summarizedAssist.toFixed(1)}`}
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
};

export default OverallChampionsCell;
