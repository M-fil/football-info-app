import {useCachedFetch} from 'react-cached-fetch';
import {convertToTeamDto} from '../api/dtoConverters/teams';
import * as TeamsApi from '../api/teams';

export const useTeamsFetching = () => {
  const result = useCachedFetch<TeamsApi.GetAllTeamsResponse>(
    TeamsApi.Urls.GetAllTeams,
  );

  return {
    ...result,
    data: (result.data?.teams ?? []).map(team => convertToTeamDto(team)),
  };
};
