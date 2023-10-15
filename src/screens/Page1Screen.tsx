import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appThemes';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text style={styles.text}>Navegar con argumentos</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{...styles.buttonBig, backgroundColor: '#5856d6'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
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
          <Text style={styles.buttonBigText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
