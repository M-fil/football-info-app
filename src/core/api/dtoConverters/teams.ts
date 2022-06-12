import {isSvgImage} from '../../helpers/images';
import {TeamDto} from '../../interfaces/teams';
import {Team} from '../teams';

export const convertToTeamDto = (team: Team): TeamDto => ({
  id: team.id,
  name: team.name,
  logoUri: isSvgImage(team.crest) ? '' : team.crest,
  foundedYear: team.founded,
  abbreviation: team.tla,
});
