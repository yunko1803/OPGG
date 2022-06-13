import './ChampionSummary.scss';

import React from 'react';
import classNames from 'classnames';
import { ChampionWinRate } from '../models/index';
import { getKDAColor } from '../utils/functions';

type Props = {
  className?: string;
  champion: ChampionWinRate;
  isDummy?: boolean;
};

const ChampionSummary: React.FC<Props> = ({ className, champion, isDummy }) => {
  const winRate = champion.wins / champion.games;
  const kda = (champion.kills + champion.assists) / champion.deaths;
  const kdaFormatted = kda.toFixed(2) + ':1 평점';
  const kdaColor = getKDAColor(kda);
  const championLogo = !isDummy ? champion.imageUrl : process.env.PUBLIC_URL + '/icon-champ.png';

  return (
    <div className={classNames('ChampionSummary', className)}>
      <img
        className="ChampionSummary__logo"
        height={34}
        width={34}
        alt="champion logo"
        src={championLogo}
      />
      {!isDummy ? (
        <div className="ChampionSummary__detail">
          <div className="ChampionSummary__detail__name">
            {champion.name}
          </div>
          <div className="ChampionSummary__bottom">
            <div className="ChampionSummary__bottom__winrate">
              <span className={classNames('ChampionSummary__bottom__winrate__percent', {
                'ChampionSummary__bottom__winrate__percent--elite': winRate >= .6
              })}>
                {Math.floor(winRate * 100)}
              </span>
              <span className={classNames('ChampionSummary__bottom__winrate__unit', {
                'ChampionSummary__bottom__winrate__unit--elite': winRate >= .6
              })}>
                %
              </span>
              <span>
                {` (${champion.wins}승 ${champion.losses}패)`}
              </span>
            </div>
            <div className="ChampionSummary__bottom__border" />
            <div
              className="ChampionSummary__bottom__kda"
              style={{ color: kdaColor }}
            >
              {kdaFormatted}
            </div>
          </div>
        </div>
      ) : (
        <div className="ChampionSummary__dummy">
          챔피언 정보가 없습니다.
        </div>
      )
    }

    </div>
  );
};

export default ChampionSummary;
