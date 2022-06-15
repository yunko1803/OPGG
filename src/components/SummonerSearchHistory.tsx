import './SummonerSearchHistory.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import { SummonerSearchName } from '../models';

type Props = {
  className?: string;
  searchedNames: SummonerSearchName[];
  onClickPastSummoner: (summonerName: string) => void;
  onClickTogglePastSummonerStar: (pastSummoner: SummonerSearchName) => void;
  onClickDeletePastSummoner: (pastSummoner: SummonerSearchName) => void;
  summonersRef: React.RefObject<HTMLDivElement>;
};

const SummonerSearchHistory: React.FC<Props> = ({ className, searchedNames, onClickPastSummoner, onClickTogglePastSummonerStar, onClickDeletePastSummoner, summonersRef }) => {
  const [selected, setSelected] = useState('최근검색');
  const filteredPastSummoners = searchedNames.filter((pastSummoner) => pastSummoner.isFavorite);
  // console.log(searchedNames);

  return (
    <div
      className={classNames('SummonerSearchHistory', className)}
      ref={summonersRef}
    >
      <div className="SummonerSearchHistory__tabs">
        <div
          className={classNames('SummonerSearchHistory__tab', {
            'SummonerSearchHistory__tab--selected': selected === '최근검색'
          })}
          onClick={() => setSelected('최근검색')}
        >
          최근검색
        </div>
        <div
          className={classNames('SummonerSearchHistory__tab', {
            'SummonerSearchHistory__tab--selected': selected === '즐겨찾기'
          })}
          onClick={() => setSelected('즐겨찾기')}
        >
          즐겨찾기
        </div>
      </div>

      <div className="SummonerSearchHistory__names">
        {(selected === '최근검색' ? searchedNames : filteredPastSummoners).map((summoner, i) => (
          <div
            className="SummonerSearchHistory__cell"
            key={i}
          >
            <div
              className="SummonerSearchHistory__cell__name"
              onClick={(e) => onClickPastSummoner(summoner.summonerName)}
            >
              {summoner.summonerName}
            </div>
            <div
              className="SummonerSearchHistory__cell__logo"
              onClick={(e) => onClickTogglePastSummonerStar(summoner)}
            >
              <img
                className="SummonerSearchHistory__cell__star"
                alt="star logo"
                src={summoner.isFavorite ? 'https://s-lol-web.op.gg/images/icon/icon-favorite-on.png' : 'https://s-lol-web.op.gg/images/icon/icon-favorite-off.png'}
                width="16"
                height="16"
              />
            </div>
            <div
              className="SummonerSearchHistory__cell__logo"
              onClick={(e) => onClickDeletePastSummoner(summoner)}
            >
              <img
                className="SummonerSearchHistory__cell__cross"
                alt="xm logo"
                src="https://s-lol-web.op.gg/images/site/icon-history-delete.png?v=1655280878465"
                width="16"
                height="16"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummonerSearchHistory;
