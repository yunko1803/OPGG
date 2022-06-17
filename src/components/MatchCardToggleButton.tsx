import './MatchCardToggleButton.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isWin: boolean;
  isRenew: boolean;
};

const MatchCardToggleButton: React.FC<Props> = ({ className, isWin, isRenew }) => {
  return (
    <div className={classNames('MatchCardToggleButton', className, {
      'MatchCardToggleButton--win': isWin,
      'MatchCardToggleButton--renew': isRenew
    })}>

      {!isRenew ? (
        <img
          className="MatchCardToggleButton__down"
          src={`https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-${isWin ? 'blue' : 'red'}.png?v=1655280878465`}
          alt="arrow down"
        />
      ) : (
        <img
          className="MatchCardToggleButton__down"
          src="https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-grey.png?v=1655280878465"
          alt="arrow down"
        />
      )}


    </div>
  );
};

export default MatchCardToggleButton;
