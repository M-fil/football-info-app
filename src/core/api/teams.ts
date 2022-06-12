import {EnvConfig} from '../constants/envConfig';

export const Urls = {
  GetAllTeams: `${EnvConfig.mainUrl}/v4/teams`,
};

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}

export interface GetAllTeamsResponse {
  teams: Team[];
}
