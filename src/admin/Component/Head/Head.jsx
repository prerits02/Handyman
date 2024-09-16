import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"

const Head = ({name}) => {
  return (
    <>
        <StatusBar barStyle="dark-content" backgroundColor="#f1b407" />
        <View style={styles.head}>
            <TouchableOpacity>
                <Entypo name="menu" size={27} color="#000"/>
            </TouchableOpacity>
            <Text style={styles.heading}>{name}</Text>
        </View>
    </>
  )
}

export default Head

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#f1b407"
    },
    heading:{
        marginLeft:20,
        fontSize:20,
        color:"#000",
        fontWeight:"700"
    }
})