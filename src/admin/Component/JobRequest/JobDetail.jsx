import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const JobDetail = ({ route }) => {
    
    const navigation = useNavigation()
    const { name } = route.params

  return (
    <>
        <View style={styles.head}>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Entypo name="chevron-left" size={27} color="#000"/>
                  </TouchableOpacity>
                  <Text style={styles.heading}>{name}</Text>
              </View>
          </View>
          <View style={{backgroundColor:"#FFF",height:Dimensions.get("window").height,padding:20}}>
            <View style={styles.card}>
                <View style={{marginVertical:10}}>
                    <Text style={styles.title}>Post Job Title</Text>
                    <Text style={styles.main}>Service Mesin Ac</Text>
                </View>
                <View style={{marginVertical:10}}>
                    <Text style={styles.title}>Post Job Description</Text>
                    <Text style={styles.main}>Mati total</Text>
                </View>
                {/* wokerimgexample.jpg */}
                <View style={{marginVertical:10}}>
                    <Text style={styles.title}>Estimated Price</Text>
                    <Text style={styles.main}>$200.00</Text>
                </View>
            </View>
            <Text style={[styles.main,{marginVertical:10}]}>Services</Text>
            <View style={[styles.card,{flexDirection:"row",alignItems:"center",gap:20}]}>
                <Image style={styles.img} source={require("../../../assets/images/wokerimgexample.jpg")} />
                <Text style={[styles.title,{fontSize:15}]}>Ac Repair</Text>
            </View>
          </View>
    </>
  )
}

export default JobDetail

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
      card:{
        backgroundColor:"#f5f7f9",
        padding:15,
        borderRadius:15
      },
      title:{
        color:"grey",
        fontWeight:"500"
      },
      main:{
        color:"#000",
        fontWeight:"600"
      },
      img:{
        width:60,
        height:60,
        borderRadius:20
      }
})