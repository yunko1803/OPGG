import './MatchChampion.scss';

import React from 'react';
import classNames from 'classnames';
import { Champion, ImageObj } from '../models/index';
import ChampionLogo from './ChampionLogo';
import SpellLogo from './SpellLogo';
import RuneLogo from './RuneLogo';
import Spacer from './Spacer';

type Props = {
  className?: string;
  champion: Champion;
  spells: ImageObj[];
  runes: string[];
};

const MatchChampion: React.FC<Props> = ({ className, champion, spells, runes }) => {
  const name = getChampionName();

  return (
    <div className={classNames('MatchChampion', className)}>
      <div className="MatchChampion__detail">
        <ChampionLogo
          className="MatchChampion__detail__logo"
          width={46}
          height={46}
          imageUrl={champion.imageUrl}
        />
        <div className="MatchChampion__detail__spells">
          {spells.map((spell, i) => (
            <SpellLogo
              key={i}
              imageUrl={spell.imageUrl}
              width={22}
              height={22}
            />
          ))}
        </div>
        <div className="MatchChampion__detail__runes">
          {runes.map((rune, i) => (
            <RuneLogo
              key={i}
              imageUrl={rune}
              width={22}
              height={22}
              isCircle
            />
          ))}
        </div>
      </div>
      <Spacer space={7} />
      <div className="MatchChampion__name">
        {name}
      </div>
    </div>
  );

  function getChampionName() {
    const filters = champion.imageUrl.split('/');
    const name = filters[filters.length - 1].split('.')[0].toUpperCase();
    return name;
  }
};

export default MatchChampion;
