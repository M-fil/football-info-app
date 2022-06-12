import Config from 'react-native-config';
import {EnvConfigInt} from '../interfaces/envConfig';

export const EnvConfig: EnvConfigInt = {
  mainUrl: Config.MAIN_URL,
  apiKey: Config.API_TOKEN,
};
