import './Spacer.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  space: number;
};

const Spacer: React.FC<Props> = ({ className, space }) => {
  return (
    <div
      className={classNames('Spacer', className)}
      style={{ height: space + 'px' }}
    />
  );
};

export default Spacer;
