import './RankResult.scss';

import React from 'react';
import classNames from 'classnames';
import { ABBREVIATED_SOLO_RANK, SOLO_RANK, FLEX_RANK } from '../utils/constants';
import { League } from '../models/index';
import Loading from './Loading';

type Props = {
  className?: string;
  rankData: League;
};

const RankResult: React.FC<Props> = ({ className, rankData }) => {
  const tierRank = rankData.tierRank;
  const totalMatches = rankData.losses + rankData.wins;
  const winningRate = Math.floor((rankData.wins / totalMatches) * 100);
  const tierDivision = tierRank.tier + ' ' + getTierDivision();
  const twoDigitsLP = rankData.tierRank.lp % 100;
  const rankType = getRankType();

  return (
    <div className={classNames('RankResult', className)}>
      {!rankData.hasResults ? <Loading className="RankResult__loading" /> :
        <div className="RankResult__content">
          <img
            src={tierRank.imageUrl}
            width="104"
            height="104"
            alt="solo rank logo"
          />
          <div className="RankResult__content__detail">
            <div className="RankResult__content__detail__label">
              {rankType}
            </div>
            <div className="RankResult__content__detail__position">
              <span className="RankResult__content__detail__position--bold">탑</span>
              {` (총 `}
              <span className="RankResult__content__detail__position--font">{totalMatches}</span>
              {`게임)`}
            </div>
            <div className="RankResult__content__detail__tier">
              {tierDivision}
            </div>
            <div className="RankResult__content__detail__lp">
              <span className="RankResult__content__detail__lp--bold">{`${twoDigitsLP} LP`}</span>
              {` / ${rankData.wins}승 ${rankData.losses}패`}
            </div>
            <div className="RankResult__content__detail__winningrate">
              {`승룰 ${winningRate}%`}
            </div>
          </div>
        </div>
      }
    </div>
  );

  function getRankType() {
    switch (tierRank.name) {
      case ABBREVIATED_SOLO_RANK:
        return SOLO_RANK;
      case FLEX_RANK:
        return FLEX_RANK;
    }
  }

  function getTierDivision() {
    switch (tierRank.division) {
      case 'i':
        return 1;
      case 'ii':
        return 2;
      case 'iii':
        return 3;
      case 'iv':
        return 4;
    }
  }
};

export default RankResult;
