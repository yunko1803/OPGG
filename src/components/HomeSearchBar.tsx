import './HomeSearchBar.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?: string;
};

const HomeSearchBar: React.FC<Props> = ({ className }) => {
  const [summonerName, setSummonerName] = useState('');
  const navigate = useNavigate();

  return (
    <form
      className={classNames('HomeSearchBar', className)}
      onSubmit={handleSubmit}
    >
      <div className="HomeSearchBar__main">
        <div className="HomeSearchBar__main__title">
          Search
        </div>
        <input
          className="HomeSearchBar__main__input"
          placeholder="소환사명1, 소환사명2, ..."
          value={summonerName}
          onChange={handleChangeName}
        />
      </div>

      <div className="HomeSearchBar__btn">
        <img
          className="HomeSearchBar__btn__logo"
          src={process.env.PUBLIC_URL + '/icon-gg.png'}
          width="40"
          height="20"
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

    navigate(`/summoners/${summonerName}`);
    setSummonerName('');
  }
};

export default HomeSearchBar;
