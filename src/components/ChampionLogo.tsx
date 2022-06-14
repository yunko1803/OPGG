import './ChampionLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  imageUrl: string;
  isCircle?: boolean;
  width: number;
  height: number;
};

const ChampionLogo: React.FC<Props> = ({ className, isCircle, width, height, imageUrl }) => {

  return (
    <img
      className={classNames('ChampionLogo', className, {
        'ChampionLogo--circle': isCircle,
      })}
      width={width}
      height={height}
      src={imageUrl}
      alt="champion logo"
    />
  );
};

export default ChampionLogo;
