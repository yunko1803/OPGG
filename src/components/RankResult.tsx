import './RankResult.scss';

import React from 'react';
import classNames from 'classnames';
import { ABBREVIATED_SOLO_RANK, SOLO_RANK, FLEX_RANK } from '../utils/constants';
import { getTierDivision } from '../utils/functions';
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
  const tierDivision = tierRank.tier + ' ' + getTierDivision(tierRank.division);
  const twoDigitsLP = rankData.tierRank.lp % 100;
  const rankType = getRankType();

  return (
    <div className={classNames('RankResult', className)}>
      {!rankData.hasResults ? <Loading className="RankResult__loading" /> :
        <div className="RankResult__content">
          {tierRank.tierDivision !== 'Unranked' ? (
            <img
              src={tierRank.imageUrl}
              width="104"
              height="104"
              alt="solo rank logo"
            />
          ) : (
            <img
              className="RankResult__unranked"
              src={process.env.PUBLIC_URL + '/icon-unranked.png'}
              width="64"
              height="64"
              alt="unrank logo"
            />
          )}

          <div className="RankResult__content__detail">
            <div className="RankResult__content__detail__label">
              {rankType}
            </div>
            {tierRank.tierDivision !== 'Unranked' ? (
              <>
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
              </>
            ) : (
              <div className="RankResult__content__detail__unranked">
                Unranked
              </div>
            )}
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
};

export default RankResult;
