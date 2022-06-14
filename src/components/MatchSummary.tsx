import './MatchSummary.scss';

import React from 'react';
import classNames from 'classnames';
import { differenceTimeFormat } from '../utils/functions';

type Props = {
  className?: string;
  type: string;
  createDate: number;
  isWin: boolean;
  gameLength: number;
};

const MatchSummary: React.FC<Props> = ({ className, type, createDate, isWin, gameLength }) => {
  const result = isWin ? '승리' : '패배';
  const createdAt = differenceTimeFormat(new Date(createDate * 1000));
  const gameMinutes = Math.floor(gameLength / 60);
  const gameSeconds = Math.floor(gameLength % 60);

  return (
    <div className={classNames('MatchSummary', className)}>
      <div className="MatchSummary__dummy" />
      <div className="MatchSummary__type">
        {type}
      </div>
      <div className="MatchSummary__created">
        {createdAt}
      </div>
      <div className={classNames('MatchSummary__border', {
        'MatchSummary__border--win': isWin
      })} />
      <div className={classNames('MatchSummary__result', {
        'MatchSummary__result--win': isWin
      })}>
        {result}
      </div>
      <div className="MatchSummary__length">
        {`${gameMinutes}분 ${gameSeconds}초`}
      </div>
    </div>
  );
};

export default MatchSummary;
