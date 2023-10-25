import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {LateralBasicMenu} from './src/navigator/LateralBasicMenu';
import {LateralMenu} from './src/navigator/LateralMenu';
// import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <LateralBasicMenu /> */}
      <LateralMenu />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
