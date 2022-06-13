import './MatchTypeSummary.scss';

import React from 'react';
import classNames from 'classnames';
import { ChampionWinRate, Position, Summary } from '../models/index';
import MatchTypeSummaryChart from './MatchTypeSummaryChart';
import MatchTypeSummaryChampion from './MatchTypeSummaryChampion';
import MatchTypeSummaryPosition from './MatchTypeSummaryPosition';

type Props = {
  className?: string;
  champions: ChampionWinRate[];
  positions: Position[];
  summary: Summary;
};

const MatchTypeSummary: React.FC<Props> = ({ className, champions, positions, summary }) => {
  const sortedPositions = positions.sort((a, b) => {
      return b.games - a.games;
  });

  return (
    <div className={classNames('MatchTypeSummary', className)}>
      <MatchTypeSummaryChart summary={summary} />
      <MatchTypeSummaryChampion champions={champions} />
      <MatchTypeSummaryPosition positions={sortedPositions} />
    </div>
  );
};

export default MatchTypeSummary;
