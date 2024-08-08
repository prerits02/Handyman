import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

    const [restaurants, setRestaurants] = useState(true)
    const [Instamart, setInstamart] = useState(false)
    const navigation = useNavigation()

  return (
    <ScrollView style={{backgroundColor:"#FFF",height:Dimensions.get("window").height}} showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <FontAwesome6 name="arrow-left-long" color="#000" size={22}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.help}>
                <Text style={{color:"#000",fontWeight:"700"}}>Help</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.info}>
            <Text style={{color:"#000",fontSize:20,fontWeight:"500"}}>Himanshu</Text>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{color:"#1e1e1e"}}>+91 - 8094104911</Text>
                <Entypo name="dot-single" color="#1e1e1e" />
                <Text style={{color:"#1e1e1e"}}>himanshu2000b@gmail.com</Text>
            </View>
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingVertical:5}}>
                <Text style={{color:"#1e1e1e"}}>Edit Profile</Text>
                <Entypo name="chevron-right" size={18} color="#1e1e1e" />
            </TouchableOpacity>
        </View>
        <View style={styles.main}>
            <TouchableOpacity style={styles.list}>
                <View>
                    <Text style={{color:"#000",fontSize:15}}>My Account</Text>
                    <Text style={{color:"grey",fontSize:12}}>Favourates, Hidden restaurants & Settings</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
                <View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{color:"#000",fontSize:15}}>My Eatlist</Text>
                        <View style={styles.new}>
                            <Text style={styles.newtxt}>New</Text>
                        </View>
                    </View>
                    <Text style={{color:"grey",fontSize:12}}>View all your saved lists in one place</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
                <View>
                    <Text style={{color:"#000",fontSize:15}}>Addresses</Text>
                    <Text style={{color:"grey",fontSize:12}}>Share, Edit & Add New Addresses</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
                <View>
                    <Text style={{color:"#000",fontSize:15}}>Payments & Refunds</Text>
                    <Text style={{color:"grey",fontSize:12}}>Refund Status & Payment Modes</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
                <View>
                    <Text style={{color:"#000",fontSize:15}}>Swiggy Money & Gift Cards</Text>
                    <Text style={{color:"grey",fontSize:12}}>Account balance, Gift cards & Transaction History</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.list}>
                <View>
                    <Text style={{color:"#000",fontSize:15}}>Refund & Earn Program</Text>
                    <Text style={{color:"grey",fontSize:12}}>Refer friends & earn upto ₹2500 cashback on Swiggy</Text>
                </View>
                <Entypo name="chevron-right" color="#aaabaf" size={22} />
            </TouchableOpacity>
        </View>
        <View style={styles.pastorders}>
            <Text style={{fontSize:12,color:"grey",fontWeight:"700"}}>PAST ORDERS</Text>
        </View>
        <View>
            <View style={styles.history}>
                <TouchableOpacity onPress={()=>{setRestaurants(true),setInstamart(false)}}>
                    <Text style={restaurants?{marginLeft:10,borderBottomWidth:2,borderColor:"#f1b407",color:"#000",fontSize:15,fontWeight:"700",paddingBottom:5}:{marginLeft:10,color:"#000",fontSize:15,fontWeight:"700",paddingBottom:5}}>Restaurants</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{setRestaurants(false),setInstamart(true)}}>
                    <Text style={Instamart?{marginLeft:10,borderBottomWidth:2,borderColor:"#f1b407",color:"#000",fontSize:15,fontWeight:"700",paddingBottom:5}:{marginLeft:10,color:"#000",fontSize:15,fontWeight:"700",paddingBottom:5}}>Instamart & More</Text>
                </TouchableOpacity>
            </View>
            {restaurants?
            <TouchableOpacity>
                <View style={{paddingHorizontal:10,paddingTop:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{color:"#000",fontSize:15,fontWeight:"500"}}>Rollsking</Text>
                    <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                        <Text style={{color:"#000"}}>Delivered</Text>
                        <View style={{backgroundColor:"green",borderRadius:100,justifyContent:"center",alignItems:"center",width:15,height:15,paddingVertical:0}}>
                            <Text style={{fontSize:10,color:"#FFF"}}>✓</Text>
                        </View>
                    </View>
                </View>
                <Text style={{paddingHorizontal:10,fontSize:13,color:"#89888d"}}>Kharadi</Text>
                <View style={{paddingHorizontal:10,flexDirection:"row",alignItems:"center",paddingBottom:10}}>
                    <Text style={{color:"#89888d",fontWeight:"600"}}>₹104</Text>
                    <Entypo name="chevron-right" color="#89888d" size={22} />
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity>
                <View style={{paddingHorizontal:10,paddingTop:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{color:"#000",fontSize:15,fontWeight:"500"}}>Instamart</Text>
                    <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                        <Text style={{color:"#000"}}>Delivered</Text>
                        <View style={{backgroundColor:"green",borderRadius:100,justifyContent:"center",alignItems:"center",width:15,height:15,paddingVertical:0}}>
                            <Text style={{fontSize:10,color:"#FFF"}}>✓</Text>
                        </View>
                    </View>
                </View>
                <Text style={{paddingHorizontal:10,fontSize:13,color:"#89888d"}}>Kharadi</Text>
                <View style={{paddingHorizontal:10,flexDirection:"row",alignItems:"center",paddingBottom:10}}>
                    <Text style={{color:"#89888d",fontWeight:"600"}}>₹189</Text>
                    <Entypo name="chevron-right" color="#89888d" size={22} />
                </View>
            </TouchableOpacity>
            }
        </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
    head:{
        backgroundColor:"#f1b407",
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingTop:20
    },
    help:{
        backgroundColor:"#ffedba",
        paddingVertical:3,
        paddingHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100
    },
    info:{
        backgroundColor:"#f1b407",
        paddingHorizontal:10
    },
    main:{
        padding:10
    },
    list:{
        borderBottomWidth:1,
        paddingVertical:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:"#acacac"
    },
    new:{
        backgroundColor:"#f1b407",
        marginHorizontal:5,
        paddingHorizontal:5,
        borderRadius:5
    },
    newtxt:{
        color:"#FFF",
        fontWeight:"700"
    },
    pastorders:{
        backgroundColor:"#f4f4f4",
        paddingTop:20,
        paddingBottom:10,
        paddingHorizontal:10
    },
    history:{
        borderBottomWidth:1,
        flexDirection:"row",
        gap:20,
        paddingTop:20,
        borderColor:"#ebebeb"
    }
})