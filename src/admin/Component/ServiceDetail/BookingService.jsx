import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';
import Popover from 'react-native-popover-view';

const BookingService = () => {

    const navigation = useNavigation()

  return (
    <>
    <View style={{position:"relative"}}>
        <ScrollView style={{flexGrow: 1}}>
            <View style={{backgroundColor:"#FFF"}}>
                <View style={styles.imgcontainer}>
                    <Image style={[styles.bgImage, { height: Dimensions.get("window").height * 0.6 }]} source={require("../../../assets/images/wokerimgexample.jpg")} />
                    <TouchableOpacity style={[styles.iconbtn,{left:0}]} onPress={()=>navigation.goBack()}>
                        <Entypo name="chevron-left" size={30} color="#57595c"/>
                    </TouchableOpacity>
                    
                    <Popover
                        from={(
                            <TouchableOpacity style={[styles.iconbtn,{right:0,marginRight:10}]} onPress={() => setShowPopover(true)}>
                                <Entypo name="dots-three-horizontal" size={30} color="#57595c"/>
                            </TouchableOpacity>
                            )}>
                                <View style={styles.menu}>
                                    <TouchableOpacity onPress={() => console.log('Edit')}>
                                        <Text style={styles.menuItem}>Edit</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => console.log('Delete')}>
                                        <Text style={styles.menuItem}>Delete</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => console.log('Restore')}>
                                        <Text style={styles.menuItem}>Restore</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => console.log('Force Delete')}>
                                        <Text style={styles.menuItem}>Force Delete</Text>
                                    </TouchableOpacity>
                                </View>
                    </Popover>
                    <View style={styles.servicedetail}>
                        <View style={styles.profileContainer}>
                            <Image style={styles.profileimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
                        </View>
                        <View style={styles.detailcontainer}>
                            <View style={{flexDirection:"row",alignItems:"center",gap:8}}>
                                <Text style={styles.navbar}>House Cleaning</Text>
                                <Entypo name="chevron-right" color="grey" size={16}/>
                                <Text style={[styles.navbar,{color:"#6861a6"}]}>domestic cleaning</Text>
                            </View>
                            <Text style={styles.detailname}>Cleaning</Text>
                            <Text style={[styles.navbar,{color:"#6861a6",fontSize:15}]}>$200.00</Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                <Text style={[styles.navbar,{}]}>Duration</Text>
                                <Text style={[styles.navbar,{color:"#6861a6"}]}>00:00 hour</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={[styles.navbar,{}]}>Rating</Text>
                                <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
                                    <FontAwesome name="star" size={17} color="#f1cb57"/>
                                    <Text style={[styles.detailname,{fontSize:14}]}>0.0</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={[styles.mainheading,{marginTop:-150}]}>Description</Text>
                <Text style={[styles.mainheading,{fontWeight:"500",color:"grey",marginTop:20}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit debitis odit optio, dolorum, doloremque excepturi quia earum in eligendi atque officiis. Quis quo, quae quisquam velit esse officia nisi!</Text>
                <Text style={[styles.mainheading,{marginVertical:20}]}>Available At</Text>
                <TouchableOpacity style={styles.availablebtn}>
                    <Text style={styles.availablebtntxt}>Canada montibachiya</Text>
                </TouchableOpacity>
                <Text style={styles.aboutp}>About Provider</Text>
                <View style={styles.providercontainer}>
                    <View style={styles.profilecon}>
                        <View style={{width:"30%"}}>
                            <Image style={styles.providerimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
                        </View>
                        <View style={{width:"60%",gap:8}}>
                            <Text style={styles.providername}>Provider Demo</Text>
                            <View style={{flexDirection:"row"}}>
                                <FontAwesome name="star" size={17} color="#71c899"/>
                                <FontAwesome name="star" size={17} color="#71c899"/>
                                <FontAwesome name="star" size={17} color="#71c899"/>
                                <FontAwesome name="star" size={17} color="#71c899"/>
                                <FontAwesome name="star-half-full" size={17} color="#71c899"/>
                            </View>
                        </View>
                        <View style={{width:"10%"}}>
                            <MaterialIcons name="verified" size={28} color="#2a95ed"/>
                        </View>
                    </View>
                    <View style={styles.providerdetails}>
                        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <Ionicons name="mail-outline" size={18} color="#000"/>
                            <Text style={styles.mail}>demo@provider.com</Text>
                        </View>
                    </View>
                    <View style={styles.providerdetails}>
                        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <Feather name="phone-call" size={18} color="#000"/>
                            <Text style={styles.mail}>01-23456789</Text>
                        </View>
                    </View>
                    <View style={styles.providerdetails}>
                        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <Ionicons name="location-outline" size={18} color="#000"/>
                            <Text style={styles.mail}>US</Text>
                        </View>
                    </View>
                    <View style={styles.providerdetails}>
                        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                            <Feather name="watch" size={18} color="#000"/>
                            <Text style={styles.mail}>2021</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styles.mainheading,{marginVertical:20}]}>Reviews {"("+0+")"}</Text>
                <Text style={[styles.mainheading,{fontWeight:"500",color:"grey",marginVertical:20,textAlign:"center"}]}>No Reviews yet</Text>
            </View>
        </ScrollView>
            <TouchableOpacity style={styles.star}>
                <FontAwesome name="star" size={30} color="#FFF"/>
            </TouchableOpacity>
    </View>
    </>
  )
}

export default BookingService

const styles = StyleSheet.create({
    bgImage:{
        width:Dimensions.get("window").width,
        height:"60%",
        resizeMode:"cover"
    },
    imgcontainer:{
        position:"relative"
    },
    iconbtn:{
        backgroundColor:"#fafafa99",
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:0,
        marginLeft:10,
        marginTop:20,
        borderRadius:100
    },
    profileimg:{
        width:70,
        height:70,
        borderRadius:10
    },
    profileContainer:{
        borderWidth:2,
        width:75,
        height:75,
        borderRadius:10,
        borderColor:"#FFF"
    },
    servicedetail:{
        bottom:200,
        marginHorizontal:10
    },
    detailcontainer:{
        backgroundColor:"#FFF",
        borderRadius:10,
        padding:15,
        marginTop:20,
        elevation:3,
        flexDirection:"column",
        justifyContent:"space-between",
        gap:10
    },
    navbar:{
        fontSize:14,
        color:"grey",
        fontWeight:"700"
    },
    detailname:{
        fontSize:18,
        color:"#000",
        fontWeight:"700"
    },
    mainheading:{
        fontSize:15,
        color:"#000",
        fontWeight:"700",
        marginHorizontal:10
    },
    availablebtn:{
        backgroundColor:"#6861a6",
        marginHorizontal:10,
        marginBottom:20,
        width:"50%",
        padding:10,
        borderRadius:15,
        alignItems:"center",
        justifyContent:"center"
    },
    availablebtntxt:{
        color:"#FFF",
        fontWeight:"700",
        fontSize:15
    },
    aboutp:{
        color:"#000",
        fontSize:15,
        fontWeight:"600",
        marginHorizontal:10,
        marginVertical:20
    },
    providerimg:{
        width:80,
        height:80,
        borderRadius:100
    },
    profilecon:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    providercontainer:{
        backgroundColor:"#eaecee",
        marginHorizontal:10,
        borderRadius:10,
        padding:20
    },
    providername:{
        fontSize:15,
        color:"#000",
        fontWeight:"600"
    },
    providerdetails:{
        marginVertical:10
    },
    mail:{
        fontSize:15,
        color:"#4d5051",
        fontWeight:"500"
    },
    star:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#4c4d95",
        right:0,
        padding:10,
        paddingHorizontal:12,
        marginRight:10,
        marginBottom:20,
        borderRadius:10
    },
    menu: {
        padding: 10,
        width:180
      },
      menuItem: {
        padding: 10,
        fontSize: 16,
        color:"#000",
        fontWeight:"500"
      },
})