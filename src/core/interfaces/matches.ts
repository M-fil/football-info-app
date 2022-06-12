export interface MatchDto {
  id: number;
  homeTeam: {
    id: number;
    name: string;
    logoUri: string;
  };
  awayTeam: {
    id: number;
    name: string;
    logoUri: string;
  };
  date: string;
  competitionName: string;
  result: string | null;
}
