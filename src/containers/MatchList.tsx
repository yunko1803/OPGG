import './MatchList.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const MatchList: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('MatchList', className)}>
    </div>
  );
};

export default MatchList;