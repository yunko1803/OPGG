import './PreviousTier.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  season: number;
  tierDivision: string;
};

const PreviousTier: React.FC<Props> = ({ className, season, tierDivision }) => {
  const abbreviatedSeason = 'S' + season;

  return (
    <div className={classNames('PreviousTier', className)}>
      <span className="PreviousTier__content">
        <span className="PreviousTier__content__bold">{abbreviatedSeason}</span>
        {tierDivision}
      </span>
    </div>
  );
};

export default PreviousTier;
