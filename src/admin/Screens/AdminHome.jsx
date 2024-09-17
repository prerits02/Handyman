import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from "react-native-vector-icons/Entypo"
import Dashboard from './Dashboard';
import CustomDrawerContent from '../Component/CustomDrawerContent/CustomDrawerContent';
import Booking from './Booking';

const Drawer = createDrawerNavigator();

const AdminHome = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#000",
        drawerInactiveTintColor: "yellow",
        drawerActiveBackgroundColor:"#FFF"
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerActiveTintColor="#000"
    >
      <Drawer.Screen name="Dashboard" drawerActiveTintColor="#000" component={Dashboard} />
      <Drawer.Screen name="Booking" drawerActiveTintColor="#000" component={Booking} />
    </Drawer.Navigator>
  )
}

export default AdminHome

const styles = StyleSheet.create({
  
})