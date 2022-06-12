import './SummonerLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  level: number;
};

const SummonerLogo: React.FC<Props> = ({ className, profileBorderImageUrl, profileImageUrl, level }) => {

  return (
    <div className={classNames('SummonerLogo', className)}>
      <img
        className="SummonerLogo__border"
        src={profileBorderImageUrl}
        alt='profile border'
      />
      <img
        className="SummonerLogo__main"
        src={profileImageUrl}
        width='98'
        height='98'
        alt='main profile'
      />
      <div
        className="SummonerLogo__level"
      >
        <div className="SummonerLogo__level__outside">
          <div className="SummonerLogo__level__outside__left" />
          <div className="SummonerLogo__level__outside__middle" />
          <div className="SummonerLogo__level__outside__right" />
        </div>
        <div className="SummonerLogo__level__inside">
          <div className="SummonerLogo__level__inside__left" />
          <div className="SummonerLogo__level__inside__middle">
            {level}
          </div>
          <div className="SummonerLogo__level__inside__right" />
        </div>
      </div>
    </div>
  );
};

export default SummonerLogo;
