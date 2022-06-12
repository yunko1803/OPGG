import './HomePage.scss';

import React from 'react';
import classNames from 'classnames';
import HomeSearchBar from '../components/HomeSearchBar';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
};

const HomePage: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames('HomePage', className)}>
      <img
        src="https://opgg-static.akamaized.net/logo/20220606174433.c7f46ef4cea841e6b5d297bafede3da8.png?image=q_auto,f_webp,w_auto&v=1654844721724"
        width="375"
        height="224"
        alt="main logo"
      />
      <Spacer space={50} />
      <HomeSearchBar />
    </div>
  );
};

export default HomePage;
