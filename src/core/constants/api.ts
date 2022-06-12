import {EnvConfig} from './envConfig';

export const AuthHeaders = {
  'X-Auth-Token': EnvConfig.apiKey,
};
