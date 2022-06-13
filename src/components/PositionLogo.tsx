import './PositionLogo.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  position: string;
};

const PositionLogo: React.FC<Props> = ({ className, position }) => {
  const logoSource = getLogoSource();

  return (
    <img
      className={classNames('PositionLogo', className, {
        'PositionLogo--top': position === 'TOP'
      })}
      width={28}
      height={28}
      alt="position logo"
      src={process.env.PUBLIC_URL + logoSource}
    />
  );

  function getLogoSource() {
    switch (position) {
      case 'TOP':
      case 'ADC':
      return '/icon-adc.png';

      case 'JNG':
      return '/icon-jg.png';

      case 'MID':
      return '/icon-mid.png';

      case 'SUP':
      return '/icon-sup.png';
    }
  }
};

export default PositionLogo;
