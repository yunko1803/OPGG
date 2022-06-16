import './OverallChampionsList.scss';

import React from 'react';
import classNames from 'classnames';
import { MostChampion } from '../models/index';
import OverallChampionsCell from './OverallChampionsCell';

type Props = {
  className?: string;
  champions: MostChampion[];
};

const OverallChampionsList: React.FC<Props> = ({ className, champions }) => {
  const sortedChampions = champions.sort((a, b) => {
    return b.games - a.games;
  })

  return (
    <div className={classNames('OverallChampionsList', className)}>
      {sortedChampions.map((champion, i) => (
        <OverallChampionsCell
          className="OverallChampionsList__cell"
          key={i}
          champion={champion}
        />
      ))}
    </div>
  );
};

export default OverallChampionsList;
