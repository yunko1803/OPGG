export type Nullable<T> = T | null;

export interface Summoner {
  summoner: {
    ladderRank: LadderRank;
    leagues: League[];
    level: number;
    name: string;
    previousTiers: TierRank[];
    profileBackgroundImageUrl: string;
    profileBorderImageUrl: string;
    profileImageUrl: string;
    url: string;
  }
}

export interface LadderRank {
  rank: number;
  rankPercentOfTop: number;
}

export interface League {
  hasResults: boolean;
  losses: number;
  tierRank: TierRank;
  wins: number;
}

export interface TierRank {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
}

export interface MostInfoDTO {
  champions: MostChampion[];
  recentWinRate: ChampionWinRate[];
}

export interface MostChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface ChampionWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}
