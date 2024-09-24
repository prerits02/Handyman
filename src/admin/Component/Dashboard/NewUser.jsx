import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import { useNavigation } from '@react-navigation/native';

const NewUser = () => {

  const navigation = useNavigation()

    const data = [
        {id:1,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Daany Mark"},
        {id:2,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Bear giail"},
        {id:3,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Jhony Mark"},
        {id:4,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Chris Gayle"}
    ]

  return (
    <View style={styles.ProviderCon}>
        <View>
            <View style={styles.headingcon}>
              <Text style={styles.headtxt}>New User</Text>
              <TouchableOpacity onPress={()=>navigation.navigate("Users")}>
                  <Text style={styles.viewbtntxt}>View all</Text>
              </TouchableOpacity>
            </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map(item=>{
                return(
                    <TouchableOpacity style={styles.container} key={item.id}>
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
        </ScrollView>
    </View>
  )
}

export default NewUser

const styles = StyleSheet.create({
    ProviderCon:{
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:"#f5f7f9",
      },
      headingcon:{
        flexDirection:"row",
        justifyContent:"space-between"
      },
      headtxt:{
        fontWeight:"600",
        fontSize:16,
        color:"#343638"
      },
      viewbtntxt:{
        fontSize:16,
        color:"#929496"
      },
      container:{
        marginVertical:20,
        backgroundColor:"#FFF",
        width:200,
        borderRadius:20,
        alignItems:"center",
        position:"relative",
        marginRight:15
      },
      containerimg:{
        width:200,
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