import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../pages/Explore/DrawerContent';
import HomeScreen from '../pages/register/HomeScreen';
import Basicappoinment from '../pages/Trends/Bookappoinment';
import MyBookings from '../pages/Trends/MyBookings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName={'Home'}
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTitle: '',
        drawerType: 'front',
        drawerStyle: {
          width: 360,
          borderTopRightRadius: 10,
          borderBottomEndRadius: 10
        }
      }}
      initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Basicappoinment" component={Basicappoinment} />
      <Drawer.Screen name="mybookings" component={MyBookings} />
    </Drawer.Navigator>


  );
}

