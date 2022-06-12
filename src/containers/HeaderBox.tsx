import './HeaderBox.scss';

import React from 'react';
import classNames from 'classnames';
import SearchBar from '../components/SearchBar';

type Props = {
  className?: string;
};

const HeaderBox: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('HeaderBox', className)}>
      <SearchBar />
    </div>
  );
};

export default HeaderBox;
