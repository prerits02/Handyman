import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const PendingHandyman = () => {

    const navigation = useNavigation()

    

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Pending Handyman</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#f5f7f9",paddingHorizontal:10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.pickercontainer}>
                    <Fontisto name="search" size={18} style={{paddingHorizontal:20, color:"grey"}} />
                    <TextInput style={{width:"100%", fontSize:15, fontWeight:"500", color:"#000"}} placeholderTextColor="grey" placeholder='Search here' />
                </View>
                <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between",marginBottom:50}}>
                    {data.map(item=>{
                    return(
                            <TouchableOpacity style={styles.container} key={item.id} >
                                <Image style={styles.containerimg} source={item.img}/>
                                <View style={{flexDirection:"row",alignItems:"center"}}>
                                    <View style={styles.circle}></View>
                                    <Text style={styles.containertxt}>{item.name}</Text>
                                </View>
                                <View style={{flexDirection:"row",gap:30,marginBottom:20}}>
                                    <TouchableOpacity style={styles.iconbtn}>
                                        <Feather name="phone-call" size={18} color="#f1b407"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconbtn}>
                                        <Ionicons name="mail-outline" size={20} color="#f1b407"/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.pwrcon}>
                                    <TouchableOpacity style={styles.poerbtn}>
                                        <FontAwesome5 name="ban" size={22} color="#b62023"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    </>
  )
}

export default PendingHandyman

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
    pickercontainer:{
        backgroundColor:"#FFF",
        marginTop:20,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
    },
    container:{
        marginVertical:20,
        backgroundColor:"#FFF",
        width:"48%",
        borderRadius:20,
        alignItems:"center",
        position:"relative"
      },
      containerimg:{
        width:"100%",
        height:150,
        // resizeMode:"contain",
        borderTopLeftRadius:20,
        borderTopRightRadius:20
      },
      containertxt:{
        color:"#383838",
        fontSize:15,
        fontWeight:"600",
        marginVertical:20
      },
      iconbtn:{
        backgroundColor:"#f7f7d7",
        // padding:5,
        borderRadius:100,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center",
      },
      pwrcon:{
        position:"absolute",
        right:10,
        top:10
      },
      poerbtn:{
        backgroundColor:"#FFF",
        padding:5,
        borderRadius:100
      },
      circle:{
        backgroundColor:"red",
        width:12,
        height:12,
        borderRadius:100,
        marginRight:10
      }
})