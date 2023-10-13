import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.backgroundStyle}>
        <Text style={styles.text}>Hello World!a</Text>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  },
});

export default App;
