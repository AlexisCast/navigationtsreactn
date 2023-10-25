import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {LateralBasicMenu} from './src/navigator/LateralBasicMenu';
import {LateralMenu} from './src/navigator/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <LateralBasicMenu /> */}
      <LateralMenu />
    </NavigationContainer>
  );
};

export default App;
