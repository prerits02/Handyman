import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Octicons from "react-native-vector-icons/Octicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AboutApp = () => {

    const navigation = useNavigation()

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>About App</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#FFF",height:Dimensions.get("window").height}}>
            <TouchableOpacity style={styles.container}>
                <Octicons name="shield-check" size={18} color="#000"/>
                <Text style={styles.txt}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <MaterialCommunityIcons name="file-document-outline" size={18} color="#000" />
                <Text style={styles.txt}>Terms & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <AntDesign name="questioncircleo" size={18} color="#000" />
                <Text style={styles.txt}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Feather name="shopping-cart" size={18} color="#000" />
                <Text style={styles.txt}>Purchase Code</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default AboutApp

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#f1b407",
        justifyContent:"space-between"
    },
    heading:{
        marginLeft:20,
        fontSize:20,
        color:"#000",
        fontWeight:"700"
    },
    container:{
        paddingHorizontal:15,
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    txt:{
        fontSize:15,
        color:"#000",
        fontWeight:"600"
    }
})