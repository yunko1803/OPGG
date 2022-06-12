import './Loading.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Loading: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('Loading', className)}>
      Loading...
    </div>
  );
};

export default Loading;
