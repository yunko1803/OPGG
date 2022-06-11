import './Header.scss';

import React from 'react';
import classNames from 'classnames';
import HeaderBox from './HeaderBox';

type Props = {
  className?: string;
  onSubmitClick: (summonerName: string) => void;
};

const Header: React.FC<Props> = ({ className, onSubmitClick }) => {
  return (
    <div className={classNames('Header', className)}>
      <HeaderBox
        onSubmitClick={onSubmitClick}
      />
    </div>
  );
};

export default Header;
