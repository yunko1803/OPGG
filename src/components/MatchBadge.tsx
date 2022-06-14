import './MatchBadge.scss';

import React from 'react';
import classNames from 'classnames';
import { DOUBLE_KILL, TRIPLE_KILL, QUADRA_KILL, PENTA_KILL, ACE, MVP } from '../utils/constants';

type Props = {
  className?: string;
  killBadge?: string;
  mvpBadge?: string;
  isWin: boolean;
};

const MatchBadge: React.FC<Props> = ({ className, killBadge, mvpBadge, isWin }) => {
  const label = !killBadge ? getBadgeLabel(mvpBadge) : getBadgeLabel(killBadge);

  return (
    <div className={classNames('MatchBadge', className, {
      'MatchBadge--kill': !!killBadge,
      'MatchBadge--mvp': !!mvpBadge && isWin
    })}>
      {label}
    </div>
  );

  function getBadgeLabel(content: string | undefined) {
    switch (content) {
      case 'Double Kill':
        return DOUBLE_KILL;
      case 'Triple Kill':
        return TRIPLE_KILL;
      case 'Quadra Kill':
        return QUADRA_KILL;
      case 'Penta Kill':
        return PENTA_KILL;
      case ACE:
        return isWin ? MVP : ACE;
    }
  }
};

export default MatchBadge;
