import './RuneLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  imageUrl: string;
  width: number;
  height: number;
  isCircle: boolean;
};

const RuneLogo: React.FC<Props> = ({ className, imageUrl, width, height, isCircle }) => {

  return (
    <img
      className={classNames('RuneLogo', className, {
        'RuneLogo--circle': isCircle
      })}
      alt="rune logo"
      width={width}
      height={height}
      src={imageUrl}
    />
  );
};

export default RuneLogo;
