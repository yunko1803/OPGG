import './SearchBar.scss';

import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  onSubmitClick: (summonerName: string) => void;
};

const SearchBar: React.FC<Props> = ({ className, onSubmitClick }) => {
  const [summonerName, setSummonerName] = useState('');

  return (
    <form
      className={classNames('SearchBar', className)}
      onSubmit={handleSubmit}
    >
      <input
        className='SearchBar__input'
        placeholder='소환사명, 챔피언...'
        value={summonerName}
        onChange={handleChangeName}
      />
      <div className='SearchBar__btn'>
        .GG
      </div>
    </form>
  );

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setSummonerName(e.target.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    onSubmitClick(summonerName);
    setSummonerName('');
  }
};

export default SearchBar;
