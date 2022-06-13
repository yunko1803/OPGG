import './ChampionWinningRate.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import { MostInfoDTO } from '../models/index';
import { ALL_CHAMPIONS_WINRATE, RECENT_SEVENDAYS_WINRATE } from '../utils/constants';
import OverallChampionsList from './OverallChampionsList';
import RecentChampionsList from './RecentChampionsList';

type Props = {
  className?: string;
  tabClassName?: string;
  mostInfoData: MostInfoDTO;
};

const ChampionWinningRate: React.FC<Props> = ({ className, tabClassName, mostInfoData }) => {
  const [selected, setSelected] = useState(ALL_CHAMPIONS_WINRATE);
  const isAllChampsWinRateSelected = selected === ALL_CHAMPIONS_WINRATE;

  return (
    <div className={classNames('ChampionWinningRate', className)}>
      <div className="ChampionWinningRate__tabs">
        <div
          className={classNames('ChampionWinningRate__tabs__tab', tabClassName, {
            'ChampionWinningRate__tabs__tab--deselect': !isAllChampsWinRateSelected,
          })}
          style={selected !== ALL_CHAMPIONS_WINRATE ? { borderLeft: 'none' } : {}}
          onClick={(e) => onClickTab(ALL_CHAMPIONS_WINRATE)}
        >
          {ALL_CHAMPIONS_WINRATE}
        </div>
        <div
          className={classNames('ChampionWinningRate__tabs__tab', tabClassName, {
            'ChampionWinningRate__tabs__tab--deselect': isAllChampsWinRateSelected,
          })}
          style={selected !== RECENT_SEVENDAYS_WINRATE ? { borderRight: 'none' } : {}}
          onClick={(e) => onClickTab(RECENT_SEVENDAYS_WINRATE)}
        >
          {RECENT_SEVENDAYS_WINRATE}
        </div>
      </div>
      {isAllChampsWinRateSelected ? (
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
