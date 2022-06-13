import './MatchTypeSummaryChampion.scss';

import React from 'react';
import classNames from 'classnames';
import { ChampionWinRate } from '../models/index';
import { emptyChampionWinRate } from '../models/emptyData';
import ChampionSummary from './ChampionSummary';

type Props = {
  className?: string;
  champions: ChampionWinRate[];
};

const MatchTypeSummaryChampion: React.FC<Props> = ({ className, champions }) => {
  const dummyChampions = new Array(3 - champions.length).fill(emptyChampionWinRate);

  return (
    <div className={classNames('MatchTypeSummaryChampion', className)}>
      {champions.map((champion, i) => (
        <ChampionSummary
          key={i}
          champion={champion}
        />
      ))}
      {dummyChampions.map((champion, i) => (
        <ChampionSummary
          key={i}
          champion={champion}
          isDummy={true}
        />
      ))}
    </div>
  );
};

export default MatchTypeSummaryChampion;
