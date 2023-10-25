import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appThemes';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>SettingsScreen</Text>
    </View>
  );
};
