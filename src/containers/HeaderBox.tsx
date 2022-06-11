import './HeaderBox.scss';

import React from 'react';
import classNames from 'classnames';
import SearchBar from '../components/SearchBar';

type Props = {
  className?: string;
  name: string;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const HeaderBox: React.FC<Props> = ({ className, name, handleChangeName }) => {
  return (
    <div className={classNames('HeaderBox', className)}>
      <SearchBar
        name={name}
        handleChangeName={handleChangeName}
      />
    </div>
  );
};

export default HeaderBox;
