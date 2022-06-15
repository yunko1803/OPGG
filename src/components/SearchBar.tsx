import './SearchBar.scss';

import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { SummonerSearchName, Summoner } from '../models';
import { emptySummoner } from '../models/emptyData';
import SummonerSearchHistory from './SummonerSearchHistory';
import { get } from '../apis/request';
import SummonerBriefInfo from './SummonerBriefInfo';

type Props = {
  className?: string;
  summonersRef: React.RefObject<HTMLDivElement>;
  isPastSummonersOpen: boolean;
  handleIsPastSummonersOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentSummonerMenuOpen: boolean;
  handleIsCurrentSummonerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar: React.FC<Props> = ({ className, summonersRef, isPastSummonersOpen, handleIsPastSummonersOpen, isCurrentSummonerMenuOpen, handleIsCurrentSummonerMenuOpen }) => {
  const [summonerName, setSummonerName] = useState('');
  const [searchedNames, setSearchedNames] = useState<SummonerSearchName[]>([]);
  const [summonerBriefData, setSummonerBriefData] = useState<Summoner>(emptySummoner);
  const isSummonerNameBlank = !summonerName.replace(/\s/g, '');
  const navigate = useNavigate();

  useEffect(() => {
    loadSummonerBasicData();
  }, [summonerName]);

  return (
    <form
      className={classNames('SearchBar', className)}
      onSubmit={handleSubmit}
      onClick={onClickShowHistory}
    >
      <input
        className="SearchBar__input"
        placeholder="소환사명, 챔피언..."
        value={summonerName}
        onChange={handleChangeName}
      />
      <div
        className="SearchBar__btn"
        onClick={handleSubmit}
      >
        <img
          className="SearchBar__btn__logo"
          src={process.env.PUBLIC_URL + '/icon-gg.png'}
          width="28"
          height="14"
          onClick={handleSubmit}
          alt="GG logo"
        />
      </div>
      {isPastSummonersOpen && (
        <SummonerSearchHistory
          summonersRef={summonersRef}
          searchedNames={searchedNames}
          onClickPastSummoner={onClickPastSummoner}
          onClickTogglePastSummonerStar={onClickTogglePastSummonerStar}
          onClickDeletePastSummoner={onClickDeletePastSummoner}
        />
      )}
      {isCurrentSummonerMenuOpen && (
        <SummonerBriefInfo
          summonersRef={summonersRef}
          summonerTier={summonerBriefData.summoner.leagues[0].tierRank}
          summonerName={summonerBriefData.summoner.name}
          summonerLogo={summonerBriefData.summoner.profileImageUrl}
          handleIsCurrentSummonerMenuOpen={handleIsCurrentSummonerMenuOpen}
        />
      )}
    </form>
  );

  async function loadSummonerBasicData() {
    if (isSummonerNameBlank) return;

    const link = 'https://codingtest.op.gg/api/summoner/' + summonerName;
    const rep = await get<Summoner>(link);
    setSummonerBriefData(rep);
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      handleIsPastSummonersOpen(true);
      handleIsCurrentSummonerMenuOpen(false);
    } else {
      handleIsPastSummonersOpen(false);
      handleIsCurrentSummonerMenuOpen(true);
    }
    setSummonerName(e.target.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (isSummonerNameBlank) {
      alert('Please Type Something Except Space!');
      return;
    };

    navigate(`/summoners/${summonerName}`);
    addPastSummoners(summonerName);
    setSummonerName('');
  }

  function addPastSummoners(summonerName: string) {
    let biggestId = -1;
    searchedNames.forEach((summoner) => {
      if (summoner.id > biggestId) {
        biggestId = summoner.id;
      }
    });
    const newSummoner: SummonerSearchName = {
      id: ++biggestId,
      summonerName,
      isFavorite: false,
    };
    setSearchedNames([...searchedNames, newSummoner]);
  }

  function onClickPastSummoner(summonerName: string) {
    navigate(`/summoners/${summonerName}`);
  }

  function onClickTogglePastSummonerStar(pastSummoner: SummonerSearchName) {
    let newPastSummoners: SummonerSearchName[] = [];
    searchedNames.forEach((summoner) => {
      if (summoner.id !== pastSummoner.id) {
        newPastSummoners.push(summoner);
      } else {
        newPastSummoners.push({
          id: pastSummoner.id,
          summonerName: pastSummoner.summonerName,
          isFavorite: !pastSummoner.isFavorite
        })
      }
    });
    setSearchedNames(newPastSummoners);
  }

  function onClickDeletePastSummoner(pastSummoner: SummonerSearchName) {
    const newPastSummoners = searchedNames.filter((summoner) => summoner.id !== pastSummoner.id)
    setSearchedNames(newPastSummoners);
  }

  function onClickShowHistory() {
    if (!!summonerName) {
      handleIsCurrentSummonerMenuOpen(true);
    } else {
      handleIsPastSummonersOpen(true);
    }
  }
};

export default SearchBar;
