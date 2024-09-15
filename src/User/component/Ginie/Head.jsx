import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

const Head = () => {
  return (
    <View>
        <View style={styles.Head}>
            {/* <TouchableOpacity style={styles.backbtn}>
                <AntDesign color="#000" name="arrowleft" size={22} />
            </TouchableOpacity> */}
            <TouchableOpacity>
                <View style={{flexDirection:"row",gap:5}}>
                    <Entypo name="home" color="#000" size={18} />
                    <Text style={{fontWeight:"700",color:"#000"}}>Home</Text>
                    <Entypo color="#000" name="chevron-down" size={18} />
                </View>
                <Text numberOfLines={1} style={{ width: 250, color:"#000" }}>Gera Skyvillas,Tower 5, Grant Road, Vitthalnagar, Kharadi, Pune</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userContainer}>
                    <Feather name="user" color="#FFF" size={22}/>
            </TouchableOpacity>
        </View>
        <View style={styles.headtxt}>
            <Text style={{color:"#6c49e8",fontSize:30,fontWeight:"700"}}>genie</Text>
            <View>
                <Text style={{color:"#6c49e8"}}>Delivering from</Text>
                <Text style={{color:"#6c49e8", fontWeight:"600"}}>7 am - 3 am</Text>
            </View>
        </View>
        <View style={styles.headImg}>
            <Image style={{width:200,height:50,resizeMode:"cover"}} source={require("../../../assets/images/genie1.png")} />
            <Image style={{width:90,height:90,resizeMode:"cover"}} source={require("../../../assets/images/genie2.png")} />
        </View>
    </View>
  )
}

export default Head

const styles = StyleSheet.create({
    userContainer:{
        backgroundColor:"#f1b951",
        borderRadius:100,
        padding:8
    },
    Head:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:20,
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor:"#cfc9e1",
        backgroundColor:"#f1b407"
    },
    backbtn:{
        backgroundColor:"#FFF",
        borderRadius:100,
        paddingVertical:6,
        paddingHorizontal:8
    },
    headtxt:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:20,
        backgroundColor:"#eae4fe"
    },
    headImg:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#eae4fe",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        paddingHorizontal:20,
        paddingBottom:0
    }
})