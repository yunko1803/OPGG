import './SpellLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  imageUrl: string;
  width: number;
  height: number;
};

const SpellLogo: React.FC<Props> = ({ className, imageUrl, width, height }) => {
  return (
    <img
      className={classNames('SpellLogo', className)}
      src={imageUrl}
      width={width}
      height={height}
      alt="spell logo"
    />
  );
};

export default SpellLogo;
