import {isSvgImage} from '../../helpers/images';
import {MatchDto} from '../../interfaces/matches';
import {Match} from '../matches';

export const convertMatchToMatchDto = (match: Match): MatchDto => {
  const fullTimeScore = match.score.fullTime;
  const {homeTeam, awayTeam} = match;

  return {
    id: match.id,
    homeTeam: {
      id: homeTeam.id,
      name: homeTeam.name,
      logoUri: isSvgImage(homeTeam.crest) ? '' : homeTeam.crest,
    },
    awayTeam: {
      id: awayTeam.id,
      name: awayTeam.name,
      logoUri: isSvgImage(awayTeam.crest) ? '' : awayTeam.crest,
    },
    date: new Date(match.utcDate).toLocaleDateString(),
    competitionName: match.competition.name,
    result: `${fullTimeScore.home} : ${fullTimeScore.home}`,
  };
};
