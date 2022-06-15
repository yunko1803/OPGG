import './MatchCardList.scss';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { GameInfo } from '../models/index';
import { get } from '../apis/request';
import MatchCard from '../components/MatchCard';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
  matches: GameInfo[];
};

const MatchCardList: React.FC<Props> = ({ className, matches }) => {
  const [itemData, setItemData] = useState<any>({});

  useEffect(() => {
    loadItemData();
  }, []);

  return (
    <div className={classNames('MatchCardList', className)}>
      {matches.map((match, i) => (
        <div key={i}>
          <MatchCard
            match={match}
            itemData={itemData}
          />
          <Spacer space={8} />
        </div>
      ))}
    </div>
  );

  async function loadItemData() {
    const link = `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`;
    const rep = await get<any>(link);
    setItemData(rep.data);
  }
};

export default MatchCardList;
