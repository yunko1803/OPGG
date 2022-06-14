import './MatchSummoners.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const MatchSummoners: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('MatchSummoners', className)}>
    </div>
  );
};

export default MatchSummoners;