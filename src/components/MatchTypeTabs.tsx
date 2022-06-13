import './MatchTypeTabs.scss';

import React from 'react';
import classNames from 'classnames';
import { ALL, ABBREVIATED_SOLO_RANK, SOLO_RANK, FLEX_RANK } from '../utils/constants';

type Props = {
  className?: string;
  matchType: string;
  handleMatchType: (type: string) => void;
};

const MatchTypeTabs: React.FC<Props> = ({ className, matchType, handleMatchType }) => {

  return (
    <div className={classNames('MatchTypeTabs', className)}>
      <div
        className={classNames('MatchTypeTabs__tab', {
          'MatchTypeTabs__tab--selected': matchType === ALL
        })}
        onClick={() => handleMatchType(ALL)}
      >
        {ALL}
      </div>
      <div
        className={classNames('MatchTypeTabs__tab', {
          'MatchTypeTabs__tab--selected': matchType === ABBREVIATED_SOLO_RANK
        })}
        onClick={() => handleMatchType(ABBREVIATED_SOLO_RANK)}
      >
        {SOLO_RANK.replace(/\s+/g, '')}
      </div>
      <div
        className={classNames('MatchTypeTabs__tab', {
          'MatchTypeTabs__tab--selected': matchType === FLEX_RANK
        })}
        onClick={() => handleMatchType(FLEX_RANK)}
      >
        자유랭크
      </div>
    </div>
  );
};

export default MatchTypeTabs;
