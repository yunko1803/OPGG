import './MatchItems.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const MatchItems: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('MatchItems', className)}>
    </div>
  );
};

export default MatchItems;