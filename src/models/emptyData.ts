export const emptySummoner = {
  summoner: {
    ladderRank: {
      rank: -1,
      rankPercentOfTop: -1,
    },
    leagues: [{
      hasResults: false,
      losses: -1,
      tierRank: {
        division: '',
        imageUrl: '',
        lp: -1,
        name: '',
        season: -1,
        shortString: '',
        string: '',
        tier: '',
        tierDivision: '',
        tierRankPoint: -1,
      },
      wins: -1,
    }, {
      hasResults: false,
      losses: -1,
      tierRank: {
        division: '',
        imageUrl: '',
        lp: -1,
        name: '',
        season: -1,
        shortString: '',
        string: '',
        tier: '',
        tierDivision: '',
        tierRankPoint: -1,
      },
      wins: -1,
    }],
    level: -1,
    name: '',
    previousTiers: [{
      division: '',
      imageUrl: '',
      lp: -1,
      name: '',
      season: -1,
      shortString: '',
      string: '',
      tier: '',
      tierDivision: '',
      tierRankPoint: -1,
    }],
    profileBackgroundImageUrl: '',
    profileBorderImageUrl: '',
    profileImageUrl: '',
    url: ''
  }
}

export const emptyMostInfoDTO = {
  champions: [],
  recentWinRate: []
}

export const emptyMatchesDTO = {
  champions: [],
  games: [],
  positions: [],
  summary: {
    assists: -1,
    deaths: -1,
    kills: -1,
    losses: -1,
    wins: -1,
  }
}

export const emptyChampionWinRate = {
  id: -1,
  imageUrl: '',
  key: '',
  losses: -1,
  name: '',
  wins: -1,
  games: -1,
  kills: -1,
  deaths: -1,
  assists: -1,
}
