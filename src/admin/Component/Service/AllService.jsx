import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from '@react-navigation/native';

const AllService = () => {

    const navigation = useNavigation()

    const data = [
        {id:1,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Tap Fitting",price:"$123.00",heading:"Test",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
        {id:2,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Domestic Clean",price:"$100.00",heading:"Smart home maintanance",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
        {id:3,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Tap Fitting",price:"$123.00",heading:"Test",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
        {id:4,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Tap Fitting",price:"$123.00",heading:"Test",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
        {id:5,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Tap Fitting",price:"$123.00",heading:"Test",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
        {id:6,img:require("../../../assets/images/wokerimgexample.jpg"),type:"Tap Fitting",price:"$123.00",heading:"Test",profileimg:require("../../../assets/images/wokerimgexample.jpg"),name:"Provider Demo"},
    ]

    const [Imgwidth,setImgwidth] = useState({
        width:"46%"
    })

    const togglewidth = () => {
        if (Imgwidth.width=="46%"){
            setImgwidth({width:"95%"})
        }
        else{
            setImgwidth({width:"46%"})
        }
    }

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>All Service</Text>
            </View>
            <TouchableOpacity onPress={togglewidth}>
                <MaterialCommunityIcons name="view-dashboard-outline" size={25} color="#000" />
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#FFF"}}>
            <ScrollView>
                <View style={styles.pickercontainer}>
                    <Fontisto name="search" size={18} style={{paddingHorizontal:20, color:"grey"}} />
                    <TextInput style={{width:"100%", fontSize:15, fontWeight:"500", color:"#000"}} placeholderTextColor="grey" placeholder='Search here' />
                </View>
                <View style={styles.cardContainer}>
                {data.map(item=>{
                    return(
                        <TouchableOpacity style={[styles.card,Imgwidth]} key={item.id} onPress={()=>navigation.navigate("BookingService")}>
                            <View style={{position:"relative"}}>
                                <Image style={styles.bgimg} source={item.img}/>
                                <TouchableOpacity style={styles.topbar}>
                                    <Text style={styles.topbartxt}>{item.type}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottombar}>
                                    <Text style={styles.bottombartxt}>{item.price}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.stars}>
                                <FontAwesome name="star-o"/>
                                <FontAwesome name="star-o"/>
                                <FontAwesome name="star-o"/>
                                <FontAwesome name="star-o"/>
                                <FontAwesome name="star-o"/>
                            </View>
                            <Text style={[styles.heading,{fontSize:14,marginBottom:10}]}>{item.heading}</Text>
                            <View style={styles.profilecontainer}>
                                <Image style={styles.profileimg} source={item.profileimg} />
                                <Text style={styles.name}>{item.name}</Text>
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

export default AllService

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
        backgroundColor:"#f5f7f9",
        marginHorizontal:10,
        marginTop:20,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center"
    },
    cardContainer:{
        marginHorizontal:10,
        flexDirection:"row",
        width:Dimensions.get("window").width,
        flexWrap:"wrap",
        gap:10,
        marginBottom:70
    },
    card:{
        backgroundColor:"#f5f7f9",
        borderRadius:10,
        marginVertical:20,
        marginBottom:0
    },
    bgimg:{
        width:"100%",
        height:180,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    topbar:{
        backgroundColor:"#ffffffc9",
        position:"absolute",
        margin:10,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:100
    },
    topbartxt:{
        textTransform:"uppercase",
        color:"#6f6bb0",
        fontWeight:"600",
        fontSize:13
    },
    bottombar:{
        backgroundColor:"#6061bb",
        position:"absolute",
        margin:10,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:100,
        bottom:-25,
        right:0,
        borderWidth:2,
        borderColor:"#f5f7f9"
    },
    bottombartxt:{
        textTransform:"uppercase",
        color:"#FFF",
        fontWeight:"600",
        fontSize:15
    },
    stars:{
        flexDirection:"row",
        gap:5,
        margin:20,
        marginBottom:10
    },
    profilecontainer:{
        flexDirection:"row",
        alignItems:'center',
        marginHorizontal:20,
        gap:10,
        marginBottom:10
    },
    profileimg:{
        width:35,
        height:35,
        borderRadius:100
    },
    name:{
        fontSize:13,
        color:"grey",
        fontWeight:"500"
    }
})