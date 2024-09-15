import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/User/screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GinieLocations from './src/User/component/Ginie/GinieLocations';
import PickupLocation from './src/User/component/Ginie/PickupLocation';
import Profile from './src/User/component/Profile/Profile';
import Signin from './src/Signin/Signin';
import Dashboard from './src/admin/Screens/Dashboard';
// import './gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="GinieLocations" component={GinieLocations} />
        <Stack.Screen name="PickupLocation" component={PickupLocation} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})