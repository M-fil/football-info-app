import React, {useMemo} from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainRoutes} from '../core/constants/routes';
import {SpecificTeam} from '../screens/SpecificTeam';
import {Teams} from '../screens/Teams';
import {ParamListBase} from '@react-navigation/native';
import {GlobalContext} from '../core/state/global';
import {useTeamsFetching} from '../core/hooks/useTeamsFetching';

export interface MainStackParamsList extends ParamListBase {
  Teams: undefined;
  SpecificTeam: {teamId: number};
}

export type MainStackScreenProps<T extends keyof MainStackParamsList = string> =
  NativeStackScreenProps<MainStackParamsList, T>;

const Stack = createNativeStackNavigator();

export const MainNavigator: React.FC = () => {
  const {data: teams} = useTeamsFetching();

  const globalContextValue = useMemo(
    () => ({
      teams,
    }),
    [teams],
  );

  return (
    <GlobalContext.Provider value={globalContextValue}>
      <Stack.Navigator initialRouteName={MainRoutes.Teams}>
        <Stack.Screen name={MainRoutes.Teams} component={Teams} />
        <Stack.Screen name={MainRoutes.SpecificTeam} component={SpecificTeam} />
      </Stack.Navigator>
    </GlobalContext.Provider>
  );
};
