import './RecentChampionsList.scss';

import React from 'react';
import classNames from 'classnames';
import { ChampionWinRate } from '../models/index';
import RecentSevenDaysCell from './RecentSevenDaysCell';

type Props = {
  className?: string;
  champions: ChampionWinRate[];
};

const RecentChampionsList: React.FC<Props> = ({ className, champions }) => {
  const sortedChampions = champions.sort((a, b) => {
    return (b.wins + b.losses) - (a.wins + a.losses);
  })

  return (
    <div className={classNames('RecentChampionsList', className)}>
      {sortedChampions.map((champion, i) => (
        <RecentSevenDaysCell
          className="RecentChampionsList__cell"
          key={i}
          champion={champion}
        />
      ))}
    </div>
  );
};

export default RecentChampionsList;
