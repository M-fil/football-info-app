import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useLayoutEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../core/constants/images';
import {useMatchesFetching} from '../../core/hooks/useMatchesFetching';
import {GlobalContext} from '../../core/state/global';
import {MainStackParamsList} from '../../navigators';
import {MatchesList} from './components/MatchesList';

export const SpecificTeam: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<MainStackParamsList, 'SpecificTeam'>>();
  const teamId = params.teamId;
  const {data: matches, isLoading} = useMatchesFetching({
    teamId,
  });
  const {teams} = useContext(GlobalContext);
  const targetTeam = teams.find(team => team.id === teamId);

  useLayoutEffect(() => {
    if (targetTeam) {
      navigation.setOptions({
        headerTitle: targetTeam.name,
      });
    }
  }, [navigation, targetTeam]);

  const renderBottomContainer = () => {
    if (!isLoading && matches.length === 0) {
      return (
        <View>
          <Text style={styles.noDataText}>No any matches...</Text>
        </View>
      );
    }

    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <MatchesList
        matches={matches}
        topContainer={
          targetTeam && (
            <View style={styles.team}>
              <FastImage
                style={styles.teamLogo}
                source={
                  targetTeam?.logoUri
                    ? {uri: targetTeam.logoUri}
                    : Images.NoLogo
                }
              />
              <Text style={styles.teamName}>{targetTeam.name}</Text>
            </View>
          )
        }
        bottomContainer={renderBottomContainer()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  team: {
    alignItems: 'center',

    paddingVertical: 20,
  },
  teamName: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teamLogo: {
    marginBottom: 20,

    width: 70,
    height: 70,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 20,
  },
});
