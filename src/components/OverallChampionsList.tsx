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

  return (
    <div className={classNames('OverallChampionsList', className)}>
      {champions.map((champion, i) => (
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