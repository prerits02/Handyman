import { StyleSheet, Text, View,TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const PickupLocation = () => {

    const navigation = useNavigation()

  return (
    <View style={{backgroundColor:"#f1f0f5",position:"relative",height:Dimensions.get("window").height}}>
        <View style={styles.head}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={22} color="#000" />
            </TouchableOpacity>
            <Text style={{color:"#000",fontSize:17,fontWeight:"700"}}>Set pick up location</Text>
        </View>
        <View style={styles.srchboxContainer}>
            <View style={styles.srchbox}>
                <Fontisto name="search" color="#000" size={15}/>
                <TextInput style={{fontSize:14,color:"#a9a9a9",color:"#000",fontWeight:"500",width:"100%"}} placeholder='Search for building, area, or street' placeholderTextColor="grey"/>
            </View>
        </View>
        <TouchableOpacity style={styles.cContainer}>
            <View style={styles.Currentlocation}>
                <View style={styles.gpsConatiner}>
                    <MaterialCommunityIcons name="crosshairs-gps" color="#f1b407" size={18}/>
                </View>
                <Text style={{color:"#48474a", fontWeight:"700"}}>Use Current Location</Text>
            </View>
            <Entypo name="chevron-right" size={18} color="#48474a" />
        </TouchableOpacity>
        <Text style={{marginHorizontal:20,fontSize:16,color:"#414246",fontWeight:"700"}}>Your saved addresses in Pune</Text>
        <TouchableOpacity style={styles.lContainer}>
            <View style={styles.Currentlocation}>
                <View style={styles.gpsConatiner}>
                    <MaterialCommunityIcons name="home" color="#f1b407" size={18}/>
                </View>
                <Text style={{color:"#48474a", fontWeight:"700"}}>Use Current Location</Text>
            </View>
            <Entypo name="dots-three-vertical" size={15} color="#48474a" />
        </TouchableOpacity>
        <View style={styles.bottomtxt}>
            <Text style={{color:"#5e5f63",textAlign:"center",fontSize:13}}>To Select addresses from other cities, please update your location on the Genie home page</Text>
        </View>
    </View>
  )
}

export default PickupLocation

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        paddingHorizontal:20,
        paddingVertical:20,
        alignItems:"center",
        gap:20,
        backgroundColor:"#f1b407",
        elevation:5
      },
      srchboxContainer:{
        padding:20,
        backgroundColor:"#FFF",
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        elevation:5
      },
      srchbox:{
        borderWidth:1,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:10,
        paddingHorizontal:10,
        gap:10,
        borderColor:"#cccccc"
      },
      cContainer:{
        flexDirection:"row",
        backgroundColor:"#FFF",
        margin:20,
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10,
        paddingHorizontal:10
      },
      lContainer:{
        flexDirection:"row",
        backgroundColor:"#FFF",
        margin:20,
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10,
        paddingHorizontal:10,
        elevation:5,
        zIndex:999
      },
      Currentlocation:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:20,
        gap:10
      },
      gpsConatiner:{
        borderWidth:1,
        padding:8,
        borderRadius:5,
        borderColor:"#e8e8e8"
      },
      bottomtxt:{
        position:"absolute",
        bottom:0,
        justifyContent:"center",
        alignContent:"center",
        width:"100%",
        padding:20
      }
})