import './FlexRank.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const FlexRank: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('FlexRank', className)}>
    </div>
  );
};

export default FlexRank;