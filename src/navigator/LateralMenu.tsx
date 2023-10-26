import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
// import {StackNavigator} from '../navigator/StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {Colors, styles} from '../theme/appThemes';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front', // horizontal mode
        headerShown: false, // hide hamburger
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Text>
            <Icon name="compass-outline" size={23} color={Colors.primary} />
          </Text>
          <Text style={styles.menuText}> Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text>
            <Icon name="cog-outline" size={23} color={Colors.primary} />
          </Text>
          <Text style={styles.menuText}> Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
