import './MatchCard.scss';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { GameInfo, MatchDetailDTO } from '../models/index';
import { emptyMatchDetail } from '../models/emptyData';
import { get } from '../apis/request';
import MatchItems from './MatchItems';
import MatchSummoners from './MatchSummoners';
import MatchSummary from './MatchSummary';
import MatchChampion from './MatchChampion';
import MatchKDA from './MatchKDA';
import MatchIndicator from './MatchIndicator';

type Props = {
  className?: string;
  match: GameInfo;
};

const MatchCard: React.FC<Props> = ({ className, match }) => {
  const [matchDetailData, setMatchDetailData] = useState<MatchDetailDTO>(emptyMatchDetail);

  useEffect(() => {
    fetchMatchDetail();
  });

  return (
    <div className={classNames('MatchCard', className, {
      'MatchCard--win': match.isWin
    })}>
      <MatchSummary
        type={match.gameType}
        createDate={match.createDate}
        isWin={match.isWin}
        gameLength={match.gameLength}
      />
      <MatchChampion
        champion={match.champion}
        spells={match.spells}
        runes={match.peak}
      />
      <MatchKDA
        stats={match.stats.general}
        isWin={match.isWin}
      />
      <MatchIndicator
        championLevel={match.champion.level}
        stats={match.stats.general}
      />
      <MatchItems
        items={match.items}
        wardScore={match.stats.ward}
        isWin={match.isWin}
      />
      <MatchSummoners players={matchDetailData.teams[0].players} />
      <MatchSummoners players={matchDetailData.teams[1].players} />
    </div>
  );

  async function fetchMatchDetail() {
    const link = `https://codingtest.op.gg/api/summoner/${match.summonerName}/matchDetail/${match.gameId}`;
    const rep = await get<MatchDetailDTO>(link);
    setMatchDetailData(rep);
  }
};

export default MatchCard;
