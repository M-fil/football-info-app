import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../core/constants/images';

interface Props {
  logoUri: string;
  name: string;
  onOpenTeamScreen: () => void;
  style?: StyleProp<ViewStyle>;
}

export const TeamItem: React.FC<Props> = ({
  logoUri,
  name,
  onOpenTeamScreen,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onOpenTeamScreen} style={[styles.button, style]}>
      <FastImage
        source={logoUri ? {uri: logoUri} : Images.NoLogo}
        style={styles.image}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {},
  text: {
    fontSize: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});
