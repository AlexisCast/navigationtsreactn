import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {useNavigation} from '@react-navigation/native';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({title: 'Hello World1', headerBackTitle: 'Back'});
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page2Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3Screen' as never)}
      />
      <Button
        title="Go to Person Screen"
        onPress={() => navigator.navigate('PersonScreen' as never)}
      />
    </View>
  );
};
