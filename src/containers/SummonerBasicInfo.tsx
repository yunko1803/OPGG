import './SummonerBasicInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { Summoner } from '../models/index';
import Loading from '../components/Loading';
import PreviousTiers from '../components/PreviousTiers';
import SummonerDetail from '../components/SummonerDetail';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
  summonerBasicData: Summoner;
  isLoading: boolean;
};

const SummonerBasicInfo: React.FC<Props> = ({ className, summonerBasicData, isLoading }) => {
  const summoner = summonerBasicData.summoner;

  return (
    <div className={classNames('SummonerBasicInfo', className)}>
      {(isLoading) ? <Loading /> :
        <div className="SummonerBasicInfo__box">
          <PreviousTiers previousTiers={summoner.previousTiers} />
          <Spacer space={6} />
          <SummonerDetail
            profileBorderImageUrl={summoner.profileBorderImageUrl}
            profileImageUrl={summoner.profileImageUrl}
            level={summoner.level}
            name={summoner.name}
            ladderRank={summoner.ladderRank}
          />
        </div>
      }
    </div>
  );
};

export default SummonerBasicInfo;
