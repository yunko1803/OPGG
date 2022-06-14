import './MatchCardList.scss';

import React from 'react';
import classNames from 'classnames';
import { GameInfo } from '../models/index';
import MatchCard from '../components/MatchCard';
import Spacer from '../components/Spacer';

type Props = {
  className?: string;
  matches: GameInfo[];
};

const MatchCardList: React.FC<Props> = ({ className, matches }) => {

  return (
    <div className={classNames('MatchCardList', className)}>
      {matches.map((match, i) => (
        <div key={i}>
          <MatchCard
            match={match}
          />
          <Spacer space={8} />
        </div>
      ))}
    </div>
  );
};

export default MatchCardList;
