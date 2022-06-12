import './SummonerMatchInfo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const SummonerMatchInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('SummonerMatchInfo', className)}>
    </div>
  );
};

export default SummonerMatchInfo;
