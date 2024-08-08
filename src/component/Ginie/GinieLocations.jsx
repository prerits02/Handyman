import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const GinieLocations = () => {

  const navigation = useNavigation()

  return (
    <View style={{position:"relative",height:Dimensions.get("window").height,backgroundColor:"#f1f0f5"}}>
      <View style={styles.head}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="arrowleft" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={{color:"#000",fontSize:17,fontWeight:"700"}}>Pick up or Send anything</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.pickbtn} onPress={()=>navigation.navigate("PickupLocation")}>
          <FontAwesome5 style={styles.pickicon} name="arrow-up" size={15} color="#f1b407" />
          <Text style={styles.btntxt}>Set Pick up location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dropbtn}>
          <FontAwesome5 style={styles.dropicon} name="arrow-down" size={15} color="#f1b407" />
          <Text style={styles.btndroptxt}>Set Drop location</Text>
        </TouchableOpacity>
        <View style={styles.dash}>
          <Octicons name="dash" size={12}/>
          <Octicons name="dash" size={12}/>
          <Octicons name="dash" size={12}/>
          <Octicons name="dash" size={12}/>
          <Octicons name="dash" size={12}/>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={{color:"#46454a",fontWeight:"700",fontSize:15,marginBottom:10

        }}>Things to Keep in mind</Text>
        <View style={{flexDirection:"row",alignItems:"center",gap:10,marginVertical:10}}>
          <Feather name="box" size={22} color="#46454a"/>
          <Text style={{fontSize:14,color:"grey"}}>Avoid sending expensive or fragile items</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",gap:10,marginVertical:10}}>
          <Feather name="shopping-bag" size={22} color="#46454a"/>
          <Text style={{fontSize:14,color:"grey"}}>Items should fit in a backpack</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",gap:10,marginVertical:10}}>
          <MaterialCommunityIcons name="bottle-soda-classic-outline" size={22} color="#46454a"/>
          <Text style={{fontSize:14,color:"grey"}}>No alcohol, illegal or registered items</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",gap:10,marginVertical:10}}>
          <AntDesign name="clockcircleo" size={22} color="#46454a"/>
          <Text style={{fontSize:14,color:"grey"}}>Order before 7PM to avoid delays in delivery</Text>
        </View>
      </View>
      <View style={styles.delivery}>
        <Text style={{color:"#000"}}>Delivery charges</Text>
        <Feather name="info" color="#000" size={17} style={{marginTop:10}}/>
      </View>
    </View>
  )
}

export default GinieLocations

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
  container:{
    margin:20,
    position:"relative"
  },
  pickbtn:{
    backgroundColor:"#f1b407",
    flexDirection:"row",
    gap:10,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:20
  },
  dropbtn:{
    backgroundColor:"#FFF",
    flexDirection:"row",
    gap:10,
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:20,
    marginTop:10
  },
  pickicon:{
    backgroundColor:"#000",
    borderRadius:5,
    fontWeight:"700",
    padding:3,
    paddingHorizontal:5
  },
  dropicon:{
    backgroundColor:"#000",
    borderRadius:5,
    fontWeight:"700",
    padding:3,
    paddingHorizontal:5
  },
  btntxt:{
    color:"#000",
    fontSize:17,
    fontWeight:"700"
  },
  btndroptxt:{
    color:"#898b8a",
    fontSize:17,
    fontWeight:"700"
  },
  dash:{
    flexDirection:"row",
    gap:1,
    transform: [{rotate: '90deg'}],
    position:"absolute",
    bottom:61,
    left:-3,
    zIndex:999
  },
  details:{
    borderWidth:1,
    margin:20,
    marginTop:5,
    padding:15,
    borderRadius:10,
    borderColor:"#dddce1"
  },
  delivery:{
    backgroundColor:"#FFF",
    position:"absolute",
    bottom:0,
    width:"100%",
    padding:20,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    elevation:5
  }
})