import './SoloRank.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const SoloRank: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('SoloRank', className)}>
    </div>
  );
};

export default SoloRank;
