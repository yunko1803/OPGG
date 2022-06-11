import './Header.scss';

import React from 'react';
import classNames from 'classnames';
import HeaderBox from './HeaderBox';

type Props = {
  className?: string;
  name: string;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Header: React.FC<Props> = ({ className, name, handleChangeName }) => {
  return (
    <div className={classNames('Header', className)}>
      <HeaderBox
        name={name}
        handleChangeName={handleChangeName}
      />
    </div>
  );
};

export default Header;