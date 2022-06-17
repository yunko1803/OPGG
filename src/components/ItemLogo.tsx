import './ItemLogo.scss';

import React, { useState } from 'react';
import classNames from 'classnames';
import ItemDescription from './ItemDescription';

type Props = {
  className?: string;
  imageUrl: string;
  height: number;
  width: number;
  isWin?: boolean;
  isRenew?: boolean;
  item?: any;
};

const ItemLogo: React.FC<Props> = ({ className, imageUrl, height, width, isWin, item, isRenew }) => {
  const [isHover, setIsHover] = useState(false);

  return !imageUrl ? (
    <div className={classNames('ItemLogo__dummy', className, {
      'ItemLogo__dummy--win': isWin,
      'ItemLogo__dummy--renew': isRenew
    })} />
  ) : (
    <div
      className={classNames('ItemLogo', className)}
      onMouseEnter={setMouseHover}
      onMouseLeave={setOffMouseHover}
    >
      <img
        width={width}
        height={height}
        src={imageUrl}
        alt="item logo"
      />
      {isHover && (
        <ItemDescription
          className="ItemLogo__description"
          item={item}
        />
      )}
    </div>
  );

  function setMouseHover() {
    setIsHover(true);
  }

  function setOffMouseHover() {
    setIsHover(false);
  }
};

export default ItemLogo;
