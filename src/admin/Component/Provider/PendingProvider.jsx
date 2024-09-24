import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const PendingProvider = () => {

    const navigation = useNavigation()

    const data = [
        // {id:1,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Daany Mark"},
        // {id:2,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Bear giail"},
        // {id:3,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Jhony Mark"},
        // {id:4,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Chris Gayle"},
        // {id:5,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Daany Mark"},
        // {id:6,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Bear giail"},
        // {id:7,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Jhony Mark"},
        // {id:8,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Chris Gayle"}
    ]

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Provider List</Text>
            </View>
        </View>
        {data.length>0?
        <View style={{backgroundColor:"#f5f7f9",paddingHorizontal:10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.pickercontainer}>
                    <Fontisto name="search" size={18} style={{paddingHorizontal:20, color:"grey"}} />
                    <TextInput style={{width:"100%", fontSize:15, fontWeight:"500", color:"#000"}} placeholderTextColor="grey" placeholder='Search here' />
                </View>
                <View style={{flexDirection:"row", flexWrap:"wrap",justifyContent:"space-between",marginBottom:50}}>
                    {data.map(item=>{
                    return(
                            <TouchableOpacity style={styles.container} key={item.id} onPress={()=>navigation.navigate("UpdateProvider")}>
                                <Image style={styles.containerimg} source={item.img}/>
                                <Text style={styles.containertxt}>{item.name}</Text>
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
                                        <FontAwesome6 name="power-off" size={22} color="#5aa04e"/>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
        :
            <>
                <View style={[styles.pickercontainer,{marginHorizontal:10}]}>
                            <Fontisto name="search" size={18} style={{paddingHorizontal:20, color:"grey"}} />
                            <TextInput style={{width:"100%", fontSize:15, fontWeight:"500", color:"#000"}} placeholderTextColor="grey" placeholder='Search here' />
                        </View>
                <View style={{backgroundColor:"#f5f7f9",justifyContent:"center",alignItems:"center",height:Dimensions.get("window").height}}>
                    <Image source={require("../../../assets/images/nodata.png")} />
                </View>
            </>
        }
    </>
  )
}

export default PendingProvider

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
      }
})