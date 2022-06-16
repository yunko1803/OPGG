import './PositionSummary.scss';

import React from 'react';
import classNames from 'classnames';
import PositionLogo from './PositionLogo';

type Props = {
  className?: string;
  position: string;
  games: number;
  wins: number;
};

const PositionSummary: React.FC<Props> = ({ className, position, games, wins }) => {
  const positionName = getPositionName();
  const isNeverPlayed = games === 0;

  return (
    <div className={classNames('PositionSummary', className)}>
      <PositionLogo position={position} />
      <div className="PositionSummary__detail">
        <div className="PositionSummary__detail__name">
          {positionName}
        </div>
        <div className="PositionSummary__bottom">
          <div className="PositionSummary__bottom__occurence">
            {Math.floor((games / 20) * 100)}%
          </div>
          <div className="PositionSummary__bottom__winrate">
            승률
            {' '}
            <span className="PositionSummary__bottom__winrate__bold">
              {!isNeverPlayed ? Math.floor((wins / games) * 100) : 0}
            </span>
            %
          </div>
        </div>
      </div>
    </div>
  );

  function getPositionName() {
    switch (position) {
      case 'TOP':
      return '탑';

      case 'JNG':
      return '정글';

      case 'MID':
      return '미드';

      case 'ADC':
      return '원딜';

      case 'SUP':
      return '서포터';
    }
  }
};

export default PositionSummary;
