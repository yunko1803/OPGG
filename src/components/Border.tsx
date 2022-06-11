import './Border.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Border: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('Border', className)}>
    </div>
  );
};

export default Border;