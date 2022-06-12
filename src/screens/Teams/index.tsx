import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {MainRoutes} from '../../core/constants/routes';
import {useTeamsFetching} from '../../core/hooks/useTeamsFetching';
import {TeamDto} from '../../core/interfaces/teams';
import {MainStackParamsList} from '../../navigators';
import {TeamItem} from './components/TeamItem';

export const Teams: React.FC = () => {
  const navigation = useNavigation<NavigationProp<MainStackParamsList>>();
  const {
    isLoading,
    data: teams,
    refresh: refreshTeams,
    hasError,
  } = useTeamsFetching();

  const onOpenTeamScreen = (teamId: number) => () => {
    navigation.navigate(MainRoutes.SpecificTeam, {
      teamId,
    });
  };

  const keyExtractor = (item: TeamDto) => String(item.id);

  const renderItem = ({item}: {item: TeamDto}) => (
    <TeamItem
      name={item.name}
      logoUri={item.logoUri}
      onOpenTeamScreen={onOpenTeamScreen(item.id)}
      style={styles.team}
    />
  );

  const onRefreshTeams = () => {
    refreshTeams();
  };

  return (
    <SafeAreaView>
      {hasError && (
        <View style={styles.errorBlock}>
          <Text>Error in getting teams</Text>
          <Button title="Retry" onPress={onRefreshTeams} />
        </View>
      )}
      <FlatList
        data={teams}
        contentContainerStyle={styles.container}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefreshTeams} />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  team: {
    marginBottom: 20,
  },
  errorBlock: {
    alignItems: 'center',
    padding: 10,
  },
});
