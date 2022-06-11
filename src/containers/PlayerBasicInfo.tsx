import './PlayerBasicInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { Nullable, Summoner } from '../models/index';

type Props = {
  className?: string;
  summonerBasicData: Nullable<Summoner>;
};

const PlayerBasicInfo: React.FC<Props> = ({ className, summonerBasicData }) => {

  return (
    <div className={classNames('PlayerBasicInfo', className)}>
    </div>
  );
};

export default PlayerBasicInfo;
