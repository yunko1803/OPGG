import './MatchKDA.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const MatchKDA: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('MatchKDA', className)}>
    </div>
  );
};

export default MatchKDA;