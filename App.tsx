import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
import {LateralBasicMenu} from './src/navigator/LateralBasicMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <LateralBasicMenu />
    </NavigationContainer>
  );
};

export default App;
