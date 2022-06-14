import './MatchCardToggleButton.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isWin: boolean;
};

const MatchCardToggleButton: React.FC<Props> = ({ className, isWin }) => {
  return (
    <div className={classNames('MatchCardToggleButton', className, {
      'MatchCardToggleButton--win': isWin
    })}>
      <div className={classNames('MatchCardToggleButton__btn', className, {
        'MatchCardToggleButton__btn--win': isWin
      })}>
        {'>'}
      </div>
    </div>
  );
};

export default MatchCardToggleButton;
