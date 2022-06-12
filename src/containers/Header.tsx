import './Header.scss';

import React from 'react';
import classNames from 'classnames';
import HeaderBox from './HeaderBox';

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('Header', className)}>
      <HeaderBox />
    </div>
  );
};

export default Header;
