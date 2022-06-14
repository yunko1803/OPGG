import './SummonerMatchInfo.scss';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { MatchesDTO, GameInfo } from '../models/index';
import { ALL, ABBREVIATED_SOLO_RANK, FLEX_RANK } from '../utils/constants';
import MatchTypeTabs from '../components/MatchTypeTabs';
import MatchTypeSummary from '../components/MatchTypeSummary';
import Spacer from '../components/Spacer';
import MatchCardList from './MatchCardList';

type Props = {
  className?: string;
  matchesData: MatchesDTO;
};

const SummonerMatchInfo: React.FC<Props> = ({ className, matchesData }) => {
  const [matchType, setMatchType] = useState(ALL);
  const [filteredMatches, setFilteredMatches] = useState<GameInfo[]>([]);

  useEffect(() => {
    filterMatches(matchType);
  }, [matchType, matchesData]);

  return (
    <div className={classNames('SummonerMatchInfo', className)}>
      <div className="SummonerMatchInfo__table">
        <MatchTypeTabs
          matchType={matchType}
          handleMatchType={handleMatchType}
        />
        <MatchTypeSummary
          champions={matchesData.champions}
          positions={matchesData.positions}
          summary={matchesData.summary}
        />
      </div>
      <Spacer space={16} />
      <MatchCardList matches={filteredMatches} />
    </div>
  );

  function filterMatches(type: string) {
    switch (type) {
      case ALL:
        setFilteredMatches(matchesData.games);
        break;
      case ABBREVIATED_SOLO_RANK:
        const soloRankMatches = matchesData.games.filter(game => game.gameType === ABBREVIATED_SOLO_RANK);
        setFilteredMatches(soloRankMatches);
        break;
      case FLEX_RANK:
        const flexRankMatches = matchesData.games.filter(game => game.gameType === FLEX_RANK);
        setFilteredMatches(flexRankMatches);
        break;
    }
  }

  function handleMatchType(type: string) {
    setMatchType(type);
  }
};

export default SummonerMatchInfo;
