import './Header.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('Header', className)}>
    </div>
  );
};

export default Header;
