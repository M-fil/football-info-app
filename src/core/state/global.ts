import {createContext} from 'react';
import {TeamDto} from '../interfaces/teams';

export const GlobalContext = createContext<{
  teams: TeamDto[];
}>({
  teams: [],
});
