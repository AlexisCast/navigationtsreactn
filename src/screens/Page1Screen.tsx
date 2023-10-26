/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Text, View} from 'react-native';
// import {StackScreenProps} from '@react-navigation/stack';
import {Colors, styles} from '../theme/appThemes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={35} color={Colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={{...styles.text, marginVertical: 20, fontSize: 20}}>
        Navigate with arguments
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Icon name="body-outline" size={35} color="white" />
          <Text style={styles.buttonBigText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#ff9427'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="women-outline" size={35} color="white" />
          <Text style={styles.buttonBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
