import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {MatchDto} from '../../../core/interfaces/matches';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../core/constants/images';

interface Props {
  matches: MatchDto[];
  topContainer?: JSX.Element;
  bottomContainer?: JSX.Element;
}

export const MatchesList: React.FC<Props> = ({
  matches,
  topContainer,
  bottomContainer,
}) => {
  const keyExtractor = (item: MatchDto) => String(item.id);

  const renderTeam = (name: string, logoUri: string) => (
    <View style={styles.team}>
      <FastImage
        style={styles.teamLogo}
        source={logoUri ? {uri: logoUri} : Images.NoLogo}
      />
      <Text>{name}</Text>
    </View>
  );

  const renderMatch = ({item}: {item: MatchDto}) => {
    const {homeTeam, awayTeam} = item;

    return (
      <View style={styles.match}>
        {renderTeam(homeTeam.name, homeTeam.logoUri)}
        {renderTeam(awayTeam.name, awayTeam.logoUri)}
        <Text style={styles.resultText}>{item.result}</Text>
        <Text>{`${item.date} - ${item.competitionName}`}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={matches}
      keyExtractor={keyExtractor}
      renderItem={renderMatch}
      ListHeaderComponent={topContainer}
      ListFooterComponent={bottomContainer}
    />
  );
};

const styles = StyleSheet.create({
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamLogo: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  match: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,

    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
