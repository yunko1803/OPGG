import './MatchIndicator.scss';

import React from 'react';
import classNames from 'classnames';
import { General } from '../models/index';

type Props = {
  className?: string;
  championLevel: number;
  stats: General;
};

const MatchIndicator: React.FC<Props> = ({ className, championLevel, stats }) => {

  return (
    <div className={classNames('MatchIndicator', className)}>
      <div className="MatchIndicator__level">
        레벨{championLevel}
      </div>
      <div className="MatchIndicator__cs">
        {stats.cs} ({stats.csPerMin}) CS
      </div>
      <div className="MatchIndicator__participation">
        킬관여 {stats.contributionForKillRate}
      </div>
    </div>
  );
};

export default MatchIndicator;
