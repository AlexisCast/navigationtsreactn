import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {Colors, styles} from '../theme/appThemes';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={50} color={Colors.primary} />
        <Icon name="accessibility-outline" size={50} color={Colors.primary} />
        <Icon name="add-outline" size={50} color={Colors.primary} />
        <Icon name="arrow-back-outline" size={50} color={Colors.primary} />
        <Icon name="brush-outline" size={50} color={Colors.primary} />
      </Text>
    </View>
  );
};
