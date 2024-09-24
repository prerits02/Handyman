import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Octicons from "react-native-vector-icons/Octicons"
import Feather from "react-native-vector-icons/Feather"
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const HomeCrads = () => {

  const jumpToAction = DrawerActions.jumpTo('Booking');
  const navigation = useNavigation()

  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20}}>
          <TouchableOpacity style={styles.cards} onPress={()=>navigation.dispatch(jumpToAction)}>
            <View style={styles.cardflexd}>
              <Text style={styles.cardtxt}>633</Text>
              <View style={styles.iconcontainer}>
                <MaterialCommunityIcons name="ticket-outline" size={18} color="#f1b407"/>
              </View>
            </View>
            <Text style={styles.cardpara}>Total Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards} onPress={()=>navigation.navigate("AllService")}>
            <View style={styles.cardflexd}>
              <Text style={styles.cardtxt}>63</Text>
              <View style={styles.iconcontainer}>
                <Octicons name="note" size={18} color="#f1b407"/>
              </View>
            </View>
            <Text style={styles.cardpara}>Total Service</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between", marginTop:20}}>
          <TouchableOpacity style={styles.cards} onPress={()=>navigation.navigate("ProviderList")}>
            <View style={styles.cardflexd}>
              <Text style={styles.cardtxt}>11</Text>
              <View style={styles.iconcontainer}>
                <Feather name="users" size={18} color="#f1b407"/>
              </View>
            </View>
            <Text style={styles.cardpara}>Total Provider</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cards} onPress={()=>navigation.navigate("Earning")}>
            <View style={styles.cardflexd}>
              <Text style={styles.cardtxt}>$344379.37</Text>
              <View style={styles.iconcontainer}>
                <MaterialCommunityIcons name="brightness-percent" size={18} color="#f1b407"/>
              </View>
            </View>
            <Text style={styles.cardpara}>Total Revenue</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeCrads

const styles = StyleSheet.create({
    cards:{
        borderWidth:1,
        padding:10,
        borderRadius:10,
        borderColor:"#f0f0f0",
        width:"48%",
        paddingHorizontal:15
      },
      cardtxt:{
        fontSize:17,
        fontWeight:"700",
        color:"#f1b407"
      },
      cardflexd:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },
      iconcontainer:{
        backgroundColor:"#f7f7d7",
        padding:6,
        borderRadius:100
      },
      cardpara:{
        color:"#979797"
      },
})