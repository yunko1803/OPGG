import './SummonerDetail.scss';

import React from 'react';
import classNames from 'classnames';
import { LadderRank } from '../models/index';
import SummonerLogo from './SummonerLogo';

type Props = {
  className?: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  level: number;
  name: string;
  ladderRank: LadderRank;
};

const SummonerDetail: React.FC<Props> = ({ className, profileBorderImageUrl, profileImageUrl, level, name, ladderRank }) => {

  return (
    <div className={classNames('SummonerDetail', className)}>
      <SummonerLogo
        profileBorderImageUrl={profileBorderImageUrl}
        profileImageUrl={profileImageUrl}
        level={level}
      />
      <div className="SummonerDetail__info">
        <div className="SummonerDetail__info__name">{name}</div>
        <div className="SummonerDetail__info__rank">
          {`래더 랭킹 `}
          <span className="SummonerDetail__info__rank__bold">{ladderRank.rank.toLocaleString('en', {useGrouping:true})}</span>
          {`위 (상위 ${ladderRank.rankPercentOfTop}%)`}
        </div>
      </div>
    </div>
  );
};

export default SummonerDetail;
