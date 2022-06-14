import './ItemLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  imageUrl: string;
  height: number;
  width: number;
  isWin?: boolean;
};

const ItemLogo: React.FC<Props> = ({ className, imageUrl, height, width, isWin }) => {
  return !imageUrl ? (
    <div className={classNames('ItemLogo__dummy', className, {
      'ItemLogo__dummy--win': isWin
    })} />
  ) : (
    <img
      className={classNames('ItemLogo', className)}
      width={width}
      height={height}
      src={imageUrl}
      alt="item logo"
    />
  );
};

export default ItemLogo;
