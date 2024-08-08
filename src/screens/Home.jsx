import { Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Head from '../component/Home/Head';
import Main from '../component/Home/Main';
import Head2 from '../component/Ginie/Head';
import Main2 from '../component/Ginie/Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Grocery from '../component/Grocery/Grocery';


const Home = () => {

    function HomeScreen() {
        return (
            <View style={{backgroundColor:"#FFF"}}>
                <StatusBar barStyle="dark-content" backgroundColor="#f1b407" />
                <Head />
                <Main/>
            </View>
        );
    }
      
    function Ginie() {
      return (
        <View style={{backgroundColor:"#FFF"}}>
          <Head2/>
          <Main2/>
        </View>
      );
    }

    function Shop() {
      return (
        <View style={{backgroundColor:"#FFF"}}>
          <Grocery />
        </View>
      );
    }

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();


  return (
    // <View style={{height:Dimensions.get("window").height}}>
    // <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{
          headerShown: false ,
          tabBarActiveTintColor:'blue',
          tabBarInactiveTintColor:"black",
          tabBarShowLabel:false
        }}>
          <Tab.Screen name="Home" component={HomeScreen}  options={{
            tabBarIcon: () => (
              <Octicons name="home" size={20} color={"black"} />
            ),
          }} />
          <Tab.Screen name="Settings" component={Ginie} options={{
            tabBarIcon: () => (
              <FontAwesome5 name="box" size={20} color={"black"} />
            ),
          }}/>
          <Tab.Screen name="shop" component={Shop} options={{
            tabBarIcon: () => (
              <Entypo name="shop" size={20} color={"black"} />
            ),
          }}/>
        </Tab.Navigator>
        // </NavigationContainer>
    // </View>
  )
}

export default Home

const styles = StyleSheet.create({
    
})