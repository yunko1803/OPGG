import './MatchTypeSummaryPosition.scss';

import React from 'react';
import classNames from 'classnames';
import { Position } from '../models/index';
import PositionSummary from './PositionSummary';

type Props = {
  className?: string;
  positions: Position[];
};

const MatchTypeSummaryPosition: React.FC<Props> = ({ className, positions }) => {

  return (
    <div className={classNames('MatchTypeSummaryPosition', className)}>
      <div className="MatchTypeSummaryPosition__title">
        선호 포지션 (랭크)
      </div>
      {positions.map((position, i) => (
        <PositionSummary
          key={i}
          position={position.position}
          games={position.games}
          wins={position.wins}
        />
      ))}
    </div>
  );
};

export default MatchTypeSummaryPosition;
