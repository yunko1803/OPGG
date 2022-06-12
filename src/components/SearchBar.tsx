import './SearchBar.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
};

const SearchBar: React.FC<Props> = ({ className }) => {
  const [summonerName, setSummonerName] = useState('');
  const navigate = useNavigate();

  return (
    <form
      className={classNames('SearchBar', className)}
      onSubmit={handleSubmit}
    >
      <input
        className="SearchBar__input"
        placeholder="소환사명, 챔피언..."
        value={summonerName}
        onChange={handleChangeName}
      />
      <div
        className="SearchBar__btn"
        onClick={handleSubmit}
      >
        <img
          className="SearchBar__btn__logo"
          src={process.env.PUBLIC_URL + '/icon-gg.png'}
          width="28"
          height="14"
          onClick={handleSubmit}
          alt="GG logo"
        />
      </div>
    </form>
  );

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setSummonerName(e.target.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    if (!summonerName) return;

    e.preventDefault();
    navigate(`/summoners/${summonerName}`);
    setSummonerName('');
  }
};

export default SearchBar;
