import {AuthHeaders} from '../constants/api';
import {EnvConfig} from '../constants/envConfig';

export const Urls = {
  MatchesByTeamId: (teamId: number, limit: number) =>
    `${EnvConfig.mainUrl}/v4/teams/${teamId}/matches?limit=${limit}`,
};

export interface Match {
  competition: {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
  };
  id: number;
  utcDate: string;
  status: 'FINISHED' | null;
  score: {
    winner: 'AWAY_TEAM' | 'HOME_TEAM';
    fullTime: {
      home: 0;
      away: 3;
    };
  };
  homeTeam: {
    id: number;
    name: string;
    crest: string;
  };
  awayTeam: {
    id: 5;
    name: string;
    crest: string;
  };
}

export interface GetMatchesByTeamsIdResponse {
  matches: Match[];
}
