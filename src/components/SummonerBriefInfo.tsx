import './SummonerBriefInfo.scss';

import React from 'react';
import classNames from 'classnames';
import { TierRank } from '../models';
import { getTierDivision } from '../utils/functions';
import { useNavigate } from 'react-router-dom';
import ChampionLogo from './ChampionLogo';
import Spacer from './Spacer';

type Props = {
  className?: string;
  summonerTier: TierRank;
  summonerName: string;
  summonerLogo: string;
  handleIsCurrentSummonerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  summonersRef: React.RefObject<HTMLDivElement>;
};

const SummonerBriefInfo: React.FC<Props> = ({ className, summonerTier, summonerName, summonerLogo, handleIsCurrentSummonerMenuOpen, summonersRef }) => {
  const tierDivision = summonerTier.tier + ' ' + getTierDivision(summonerTier.division);
  const lp = summonerTier.lp % 100;
  const navigate = useNavigate();

  return (
    <div
      className={classNames('SummonerBriefInfo', className)}
      ref={summonersRef}
    >
      <div
        className="SummonerBriefInfo__summoner"
        onClick={onClickSummoner}
      >
        <ChampionLogo
          className="SummonerBriefInfo__summoner__img"
          isCircle
          width={32}
          height={32}
          imageUrl={summonerLogo}
        />
        <div className="SummonerBriefInfo__detail">
          <div className="SummonerBriefInfo__detail__name">
            {summonerName}
          </div>
          <Spacer space={2} />
          <div className="SummonerBriefInfo__detail__tier">
            {tierDivision} - {lp}LP
          </div>
        </div>
      </div>
    </div>
  );

  function onClickSummoner(e: any) {
    handleIsCurrentSummonerMenuOpen(false);
    navigate(`/summoners/${summonerName}`);
  }

};

export default SummonerBriefInfo;
