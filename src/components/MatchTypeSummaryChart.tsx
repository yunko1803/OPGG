import './MatchTypeSummaryChart.scss';

import React from 'react';
import classNames from 'classnames';
import { Summary } from '../models/index';
import { getKDAColor } from '../utils/functions';
import Spacer from './Spacer';

type Props = {
  className?: string;
  summary: Summary;
};

const MatchTypeSummaryChart: React.FC<Props> = ({ className, summary }) => {
  const totalMatches = summary.wins + summary.losses;
  const winRate = summary.wins / totalMatches;
  const lossPie = (1 - winRate) * 360;
  const kda = (summary.kills + summary.assists) / summary.deaths;
  const kdaFormatted = kda.toFixed(2) + ':1';
  const kdaColor = getKDAColor(kda);

  return (
    <div className={classNames('MatchTypeSummaryChart', className)}>
      <div className="MatchTypeSummaryChart__record">
        <div className="MatchTypeSummaryChart__record__result">
          {`${totalMatches}전 ${summary.wins}승 ${summary.losses}패`}
        </div>
        <Spacer space={14} />
        <div
          className="MatchTypeSummaryChart__record__chart"
          style={{ background: `conic-gradient(#ee5a52 ${lossPie}deg, #1f8ecd ${lossPie}deg)`}}
        >
          <div className="MatchTypeSummaryChart__record__chart__winrate">
            {Math.floor(winRate * 100)}%
          </div>
        </div>
      </div>
      <div className="MatchTypeSummaryChart__kda">
        <div className="MatchTypeSummaryChart__kda__data">
          <span className="MatchTypeSummaryChart__kda__data__content">
            {summary.kills}
          </span>
          {' '} / {' '}
          <span className="MatchTypeSummaryChart__kda__data__content--death">
            {summary.deaths}
          </span>
          {' '} / {' '}
          <span className="MatchTypeSummaryChart__kda__data__content">
            {summary.assists}
          </span>
        </div>
        <Spacer space={6} />
        <div
          className="MatchTypeSummaryChart__kda__score"
          style={{ color: kdaColor }}
        >
          {kdaFormatted}
          <span
            className={classNames('MatchTypeSummaryChart__kda__winrate', {
              'MatchTypeSummaryChart__kda__winrate--elite': winRate >= .6
            })}
          >
            {' '}
            ({Math.floor(winRate * 100)}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchTypeSummaryChart;
