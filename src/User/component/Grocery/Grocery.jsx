import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Bestsellers from './Bestsellers'
import GroceryKitchen from './GroceryKitchen'
import SnacksDrinks from './SnacksDrinks'
import BeauryPersonalCare from './BeauryPersonalCare'
import HouseholdEssentials from './HouseholdEssentials'

const Grocery = () => {
  return (
    <ScrollView style={{backgroundColor:"#FFF"}}>
        <View style={{paddingHorizontal:10,backgroundColor:"#f1b407",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
            <View>
                <Text style={{fontSize:12,fontWeight:"700",color:"#313432"}}>Delivery In</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <TouchableOpacity>
                    <Text style={{fontSize:20,fontWeight:"900",color:"#313432"}}>10 minutes</Text>
                    <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
                        <Text style={{color:"#313432",fontWeight:"700",fontSize:13}}>HOME -</Text>
                        <Text style={{fontSize:13,color:"grey",color:"#313432"}}>Himanshu, tower 5, ph 04 skyvillas</Text>
                        <AntDesign name='caretdown' size={8} color="#313432" />
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={{borderWidth:2,borderRadius:100}}>
                        <Feather name="user" color="#313432" size={28} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.srchContainer}>
                <AntDesign name="search1" style={{width:"10%"}} color="#313234" size={22} />
                <TextInput style={{paddingVertical:5,width:"85%",color:"grey"}} placeholderTextColor="grey" placeholder='Search "sweets"' />
                <MaterialCommunityIcons style={{width:"5%"}} name="microphone" color="#313234" size={22} />
            </View>
            <View style={styles.ads}>
                <Text style={{fontSize:25,color:"#4d3b23",fontWeight:"800"}}>Home Makeover</Text>
                <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
                    <AntDesign name="star" color="#4d3b23" size={10}/>
                    <Text style={{color:"#4d3b23",fontWeight:"700",fontSize:10}}>SALE</Text>
                    <AntDesign name="star" color="#4d3b23" size={10} />
                </View>
                <View style={styles.pwrdby}>
                    <Text style={{fontSize:8}}>POWERED BY </Text>
                    <Text style={{fontSize:8}}>Any Company</Text>
                </View>
            </View>
            <View style={styles.adcardContainer}>
                <TouchableOpacity style={styles.adcard}>
                    <View style={styles.adcardoffer}>
                        <Text style={{color:"#c8bca5",fontSize:10,paddingHorizontal:5}}>Up to 50% OFF</Text>
                    </View>
                    <Text style={{textAlign:"center",marginVertical:5,color:"#7d7463",fontWeight:"500",fontSize:12}}>Revamped Homes</Text>
                    <Image style={{width:70,height:70,resizeMode:"cover"}} source={require("../../../assets/images/ro.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.adcard}>
                    <View style={styles.adcardoffer}>
                        <Text style={{color:"#c8bca5",fontSize:10,paddingHorizontal:5}}>Up to 60% OFF</Text>
                    </View>
                    <Text style={{textAlign:"center",marginVertical:5,color:"#7d7463",fontWeight:"500",fontSize:12}}>Sparkling Bathrooms</Text>
                    <Image style={{width:80,height:70,resizeMode:"cover"}} source={require("../../../assets/images/bucket.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.adcard}>
                    <View style={styles.adcardoffer}>
                        <Text style={{color:"#c8bca5",fontSize:10,paddingHorizontal:5}}>Up to 50% OFF</Text>
                    </View>
                    <Text style={{textAlign:"center",marginVertical:5,color:"#7d7463",fontWeight:"500",fontSize:12}}>Chef-Style Kitchens</Text>
                    <Image style={{width:90,height:70}} source={require("../../../assets/images/plates.png")} />
                </TouchableOpacity>
            </View>
        </View>
        <Bestsellers />
        <GroceryKitchen />
        <SnacksDrinks />
        <BeauryPersonalCare />
        <HouseholdEssentials />
    </ScrollView>
  )
}

export default Grocery

const styles = StyleSheet.create({
    srchContainer:{
        backgroundColor:"#FFF",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:"#e4dcd1",
        borderWidth:1,
        borderRadius:10,
        marginVertical:10,
        paddingHorizontal:10
    },
    ads:{
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center"
    },
    pwrdby:{
        flexDirection:"row",
        backgroundColor:"#FFF",
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:10,
        paddingVertical:5,
        borderWidth:1,
        borderColor:"#e4d4b8"
    },
    adcard:{
        backgroundColor:"#fef5e6",
        width:"30%",
        marginBottom:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:10
    },
    adcardoffer:{
        backgroundColor:"#4a3b1c",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        padding:2,
        flexDirection:"row",
        alignItems:"center"
    },
    adcardContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})