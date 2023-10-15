import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appThemes';
import {StackScreenProps} from '@react-navigation/stack';
import {RootSackParams} from '../navigator/StackNavigator';

// interface RouteParams {
//   id: number;
//   name: string;
// }
interface Props extends StackScreenProps<RootSackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
