import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appThemes';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Return" onPress={() => navigation.pop()} />
      <Button title="Go to Page 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
