import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Head from '../Component/Head/Head'
import HomeCrads from '../Component/Dashboard/HomeCrads'
import Provider from '../Component/Dashboard/Provider'
import NewBooking from '../Component/Dashboard/NewBooking'
import JobRequest from '../Component/Dashboard/JobRequest'
import NewUser from '../Component/Dashboard/NewUser'

const Dashboard = () => {
  return (
    <>
      <Head name="Dashboard"/>
      <ScrollView style={{backgroundColor:"#FFF"}}>
        <View style={{paddingVertical:15,paddingHorizontal:10,backgroundColor:"#FFF"}}>
          <Text style={{color:"#000",fontSize:20, fontWeight:"500"}}>Hello, Admin</Text>
          <Text style={{color:"#8e8e8a", fontSize:15}}>Welcome back!</Text>
          <HomeCrads />
        </View>
        <Provider />
        <NewBooking />
        <JobRequest />
        <NewUser />
      </ScrollView>
    </>
  )
}

export default Dashboard

const styles = StyleSheet.create({

})