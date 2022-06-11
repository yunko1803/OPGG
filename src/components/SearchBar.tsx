import './SearchBar.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  name: string;
  handleChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ className, name, handleChangeName }) => {
  return (
    <div className={classNames('SearchBar', className)}>
      <input
        className='SearchBar__input'
        placeholder='소환사명, 챔피언...'
        value={name}
        onChange={handleChangeName}
      />
      <div className='SearchBar__btn'>
        .GG
      </div>
    </div>
  );
};

export default SearchBar;
