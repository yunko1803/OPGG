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
  return (
    <div className={classNames('RecentChampionsList', className)}>
      {champions.map(champion => (
        <RecentSevenDaysCell
          className="RecentChampionsList__cell"
          key={champion.id}
          champion={champion}
        />
      ))}
    </div>
  );
};

export default RecentChampionsList;
