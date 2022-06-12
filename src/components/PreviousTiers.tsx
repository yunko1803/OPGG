import './PreviousTiers.scss';

import React from 'react';
import classNames from 'classnames';
import { TierRank } from '../models/index';
import PreviousTier from './PreviousTier';

type Props = {
  className?: string;
  previousTiers: TierRank[];
};

const PreviousTiers: React.FC<Props> = ({ className, previousTiers }) => {

  return (
    <div className={classNames('PreviousTiers', className)}>
      {previousTiers.map((tier) =>
        <PreviousTier
          key={tier.season}
          season={tier.season}
          tierDivision={tier.tierDivision}
        />
      )}
    </div>
  );
};

export default PreviousTiers;
