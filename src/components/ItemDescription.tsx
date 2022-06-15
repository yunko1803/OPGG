import './ItemDescription.scss';

import React, { useState, useRef, useLayoutEffect } from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  item: any;
};

const ItemDescription: React.FC<Props> = ({ className, item }) => {
  const [divHeight, setDivHeight] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    handleHeight(ref.current?.clientHeight);
    handleWidth(ref.current?.clientWidth);
  }, [ref]);

  return (
    <div
      className={classNames('ItemDescription', className)}
      ref={ref}
      style={{
        top: `-${divHeight + 10}px`,
        left: `-${(divWidth / 2) - 10}px`,
      }}
    >
      <div className="ItemDescription__content">
        <div className="ItemDescription__content__name">
          {item.name}
        </div>
        <div className="ItemDescription__content__description">
          {item.plaintext}
        </div>
        <div className="Container" dangerouslySetInnerHTML={{__html: item.description}} />
        <br />
        <div className="ItemDescription__content__price">
          가격:
          {' '}
          <span className="ItemDescription__content__price__number">
            {item.gold.total}
          </span>
          {' '}
          <span className="ItemDescription__content__price__number">
            ({item.gold.base})
          </span>
        </div>
      </div>
      <div className="ItemDescription__content__sharp" />
    </div>
  );

  function handleHeight(height: number | undefined) {
    if (!height) return;
    setDivHeight(height);
  }

  function handleWidth(width: number | undefined) {
    if (!width) return;
    setDivWidth(width);
  }
};

export default ItemDescription;
