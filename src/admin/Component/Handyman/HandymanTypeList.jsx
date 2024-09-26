import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React, { useState } from 'react'
import SwitchToggle from "react-native-switch-toggle";
import { useNavigation } from '@react-navigation/native';

const HandymanTypeList = () => {

    const navigation = useNavigation()
    const [on,off] = useState(true)

    const data = [
        {id:1,type:"Freelance",status:"ACTIVE",commision:"$8"},
        {id:2,type:"Company",status:"INACTIVE",commision:""},
    ]

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Handyman Type</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("AddHandymanType")}>
                <Entypo name="plus" size={28} color="#000"/>
            </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor:"#FFF", padding:10,height:Dimensions.get("window").height}}>
            {data.map(item=>{
                return(
                    <View style={styles.cardContainer} key={item.id}>
                        <View style={styles.flexrow}>
                            <FontAwesome name="user-o" size={18} color="#f1b407"/>
                            <View>
                                <Text style={styles.dataheading}>Handyman Type</Text>
                                <Text style={styles.data}>{item.type}</Text>
                            </View>
                        </View>
                        <View style={styles.flexrow}>
                            <MaterialCommunityIcons name="brightness-percent" size={18} color="#f1b407"/>
                            <View>
                                <Text style={styles.dataheading}>Commision</Text>
                                {item.commision==""?null:
                                    <Text style={styles.data}>{item.commision}</Text>
                                }
                            </View>
                        </View>
                        <View style={[styles.flexrow,{borderBottomWidth:0}]}>
                            <MaterialCommunityIcons name="progress-clock" size={18} color="#f1b407"/>
                            <View style={{width:"65%"}}>
                                <Text style={styles.dataheading}>Status</Text>
                                {item.status=="ACTIVE"?
                                    <Text style={[styles.data,{color:"#058006"}]}>{item.status}</Text>
                                :
                                    <Text style={[styles.data,{color:"red"}]}>{item.status}</Text>
                                }
                            </View>
                            {item.status=="ACTIVE"?
                                <SwitchToggle
                                    switchOn={on}
                                    onPress={() => off(!on)}
                                    circleColorOff='#FFF'
                                    circleColorOn='#028105'
                                    backgroundColorOn='#7bbc7c'
                                    backgroundColorOff='grey'
                                    containerStyle={{
                                        marginTop: 16,
                                        width: 56,
                                        height: 28,
                                        borderRadius: 25,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 20,
                                    }}
                                />
                            :
                                <SwitchToggle
                                    switchOn={false}
                                    onPress={() => off(!on)}
                                    circleColorOff='#FFF'
                                    circleColorOn='#028105'
                                    backgroundColorOn='#7bbc7c'
                                    backgroundColorOff='grey'
                                    containerStyle={{
                                        marginTop: 16,
                                        width: 56,
                                        height: 28,
                                        borderRadius: 25,
                                        padding: 5,
                                    }}
                                    circleStyle={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 20,
                                    }}
                                />
                            }
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    </>
  )
}

export default HandymanTypeList

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
    cardContainer:{
        backgroundColor:"#f5f7f9",
        padding:20,
        marginVertical:10,
        borderRadius:10
    },
    flexrow:{
        flexDirection:"row",
        alignItems:"center",
        gap:20,
        borderBottomWidth:1,
        paddingBottom:10,
        borderColor:"#eef0f2",
        paddingVertical:10
    },
    dataheading:{
        fontSize:13,
        fontWeight:"500",
        color:"grey",
        paddingBottom:5
    },
    data:{
        fontSize:13,
        color:"#000",
        fontWeight:"600"
    }
})