import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from '../navigator/StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const LateralBasicMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
