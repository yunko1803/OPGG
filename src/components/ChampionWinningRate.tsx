import './ChampionWinningRate.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import { MostInfoDTO } from '../models/index';
import OverallChampionsList from './OverallChampionsList';
import RecentChampionsList from './RecentChampionsList';

const OVERALL = 'overall';
const RECENT = 'recent';

type Props = {
  className?: string;
  tabClassName?: string;
  mostInfoData: MostInfoDTO;
};

const ChampionWinningRate: React.FC<Props> = ({ className, tabClassName, mostInfoData }) => {
  const [selected, setSelected] = useState(OVERALL);
  const isOverallSelected = selected === OVERALL;

  return (
    <div className={classNames('ChampionWinningRate', className)}>
      <div className="ChampionWinningRate__tabs">
        <div
          className={classNames('ChampionWinningRate__tabs__tab', tabClassName, {
            'ChampionWinningRate__tabs__tab--deselect': !isOverallSelected,
          })}
          style={selected !== OVERALL ? { borderLeft: 'none' } : {}}
          onClick={(e) => onClickTab(OVERALL)}
        >
          챔피언 승률
        </div>
        <div
          className={classNames('ChampionWinningRate__tabs__tab', tabClassName, {
            'ChampionWinningRate__tabs__tab--deselect': isOverallSelected,
          })}
          style={selected !== RECENT ? { borderRight: 'none' } : {}}
          onClick={(e) => onClickTab(RECENT)}
        >
          7일간 랭크 승률
        </div>
      </div>
      {isOverallSelected ? (
        <OverallChampionsList champions={mostInfoData.champions} />
        ) : (
          <RecentChampionsList champions={mostInfoData.recentWinRate} />
        )
      }
    </div>
  );

  function onClickTab(label: string) {
    setSelected(label);
  }
};

export default ChampionWinningRate;
