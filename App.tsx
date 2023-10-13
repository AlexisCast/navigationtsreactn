import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </SafeAreaView>
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
