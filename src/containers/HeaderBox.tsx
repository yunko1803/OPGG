import './HeaderBox.scss';

import React from 'react';
import classNames from 'classnames';
import SearchBar from '../components/SearchBar';

type Props = {
  className?: string;
  summonersRef: React.RefObject<HTMLDivElement>;
  isPastSummonersOpen: boolean;
  handleIsPastSummonersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentSummonerMenuOpen: boolean;
  handleIsCurrentSummonerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderBox: React.FC<Props> = ({ className, summonersRef, isPastSummonersOpen, handleIsPastSummonersOpen, isCurrentSummonerMenuOpen, handleIsCurrentSummonerMenuOpen }) => {

  return (
    <div className={classNames('HeaderBox', className)}>
      <SearchBar
        summonersRef={summonersRef}
        isPastSummonersOpen={isPastSummonersOpen}
        handleIsPastSummonersOpen={handleIsPastSummonersOpen}
        isCurrentSummonerMenuOpen={isCurrentSummonerMenuOpen}
        handleIsCurrentSummonerMenuOpen={handleIsCurrentSummonerMenuOpen}
      />
    </div>
  );
};

export default HeaderBox;
