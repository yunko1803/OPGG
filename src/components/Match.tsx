import './Match.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Match: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('Match', className)}>
    </div>
  );
};

export default Match;