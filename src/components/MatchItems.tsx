import './MatchItems.scss';

import React from 'react';
import classNames from 'classnames';
import { ImageObj, Ward } from '../models/index';
import ItemLogo from './ItemLogo';

type Props = {
  className?: string;
  wardScore: Ward;
  items: ImageObj[];
  isWin: boolean;
  itemData: any;
};

const MatchItems: React.FC<Props> = ({ className, items, wardScore, isWin, itemData }) => {
  const filterItems = items.filter((item, i) => i !== items.length - 1);
  const emptyItems = new Array(6 - filterItems.length).fill(-1);
  emptyItems.forEach(dummy => filterItems.push({ imageUrl: '' }));

  return (
    <div className={classNames('MatchItems', className)}>
      <div className="MatchItems__items">
        <div className="MatchItems__items__expense">
          {filterItems.map((item, i) => (
            <ItemLogo
              key={i}
              imageUrl={item.imageUrl}
              width={22}
              height={22}
              isWin={isWin}
              item={getItemData(item.imageUrl)}
            />
          ))}
        </div>
        <div className="MatchItems__items__free">
          <ItemLogo
            className="MatchItems__items__ward"
            imageUrl={items[items.length - 1].imageUrl}
            width={22}
            height={22}
            item={getItemData(items[items.length - 1].imageUrl)}
          />
          <img
            className="MatchItems__items__build"
            src={process.env.PUBLIC_URL + (isWin ? '/icon-buildblue.png' : '/icon-buildred.png')}
            width={22}
            height={22}
            alt="build logo"
          />
        </div>
      </div>
      <div className="MatchItems__wards">
        <img
          className="MatchItems__wards__logo"
          height={16}
          width={16}
          alt="ward"
          src={process.env.PUBLIC_URL + (isWin ? '/icon-blueward.png' : '/icon-redward.png')}
        />
        {`제어 와드 ${wardScore.visionWardsBought}`}
      </div>
    </div>
  );

  function getItemData(itemUrl: string) {
    const itemArrays = itemUrl.split('/');
    const itemNum = itemArrays[itemArrays.length - 1].split('.')[0];
    return itemData[itemNum];
  }
};

export default MatchItems;
