import './PlayerQuickInfo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const PlayerQuickInfo: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('PlayerQuickInfo', className)}>
    </div>
  );
};

export default PlayerQuickInfo;
