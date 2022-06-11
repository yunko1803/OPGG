import './PlayerMatchInfo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const PlayerMatchInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('PlayerMatchInfo', className)}>
    </div>
  );
};

export default PlayerMatchInfo;
