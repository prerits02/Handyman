import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const Packages = () => {

  const navigation = useNavigation()

  return (
    <>
      <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Packages</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("AddPackage")}>
                <Entypo name="plus" size={28} color="#000"/>
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#f5f7f9",justifyContent:"center",alignItems:"center",height:Dimensions.get("window").height}}>
          <Image source={require("../../assets/images/nodata.png")} />
        </View>
    </>
  )
}

export default Packages

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
})