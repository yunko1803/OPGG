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
      <img
        className="MatchCardToggleButton__down"
       src={`https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-${isWin ? 'blue' : 'red'}.png?v=1655280878465`}
       alt="arrow down"
      />

    </div>
  );
};

export default MatchCardToggleButton;
