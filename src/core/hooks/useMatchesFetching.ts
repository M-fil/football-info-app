import {useCachedFetch} from 'react-cached-fetch';
import {convertMatchToMatchDto} from '../api/dtoConverters/matches';
import * as MatchesApi from '../api/matches';

export const useMatchesFetching = ({
  teamId,
  limit = 50,
}: {
  teamId: number;
  limit?: number;
}) => {
  const result = useCachedFetch<MatchesApi.GetMatchesByTeamsIdResponse>(
    MatchesApi.Urls.MatchesByTeamId(teamId, limit),
  );

  return {
    ...result,
    data: (result.data?.matches ?? []).map(match =>
      convertMatchToMatchDto(match),
    ),
  };
};
