import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {LateralBasicMenu} from './src/navigator/LateralBasicMenu';
import {LateralMenu} from './src/navigator/LateralMenu';
import {AuthProvider} from './src/context/authContext';
// import {Tabs} from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <LateralBasicMenu /> */}
        <LateralMenu />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
