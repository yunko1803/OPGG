import './MatchIndicator.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const MatchIndicator: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('MatchIndicator', className)}>
    </div>
  );
};

export default MatchIndicator;