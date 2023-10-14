import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {useNavigation} from '@react-navigation/native';

export const Page2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>Page2Screen</Text>
      <Button
        title="Go to Page 3"
        onPress={() => navigator.navigate('Page3Screen' as never)}
      />
    </View>
  );
};
