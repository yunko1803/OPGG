import './HeaderBox.scss';

import React from 'react';
import classNames from 'classnames';
import SearchBar from '../components/SearchBar';

type Props = {
  className?: string;
  onSubmitClick: (summonerName: string) => void;
};

const HeaderBox: React.FC<Props> = ({ className, onSubmitClick }) => {
  return (
    <div className={classNames('HeaderBox', className)}>
      <SearchBar
        onSubmitClick={onSubmitClick}
      />
    </div>
  );
};

export default HeaderBox;
