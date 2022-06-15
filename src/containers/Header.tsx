import './Header.scss';

import React from 'react';
import classNames from 'classnames';
import HeaderBox from './HeaderBox';

type Props = {
  className?: string;
  summonersRef: React.RefObject<HTMLDivElement>;
  isPastSummonersOpen: boolean;
  handleIsPastSummonersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentSummonerMenuOpen: boolean;
  handleIsCurrentSummonerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({ className, summonersRef, isPastSummonersOpen, handleIsPastSummonersOpen, isCurrentSummonerMenuOpen, handleIsCurrentSummonerMenuOpen }) => {
  return (
    <div className={classNames('Header', className)}>
      <HeaderBox
        summonersRef={summonersRef}
        isPastSummonersOpen={isPastSummonersOpen}
        handleIsPastSummonersOpen={handleIsPastSummonersOpen}
        isCurrentSummonerMenuOpen={isCurrentSummonerMenuOpen}
        handleIsCurrentSummonerMenuOpen={handleIsCurrentSummonerMenuOpen}
      />
    </div>
  );
};

export default Header;
