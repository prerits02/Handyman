import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const Payments = () => {

    const navigation = useNavigation()

    const data = [
        {id:1,Name:"Demo User",userid:"#717",paymentid:"#107",status:"Paid",Method:"Stripe",Amount:"$121.77"},
        {id:1,Name:"Demo User",userid:"#717",paymentid:"#107",status:"Paid",Method:"Stripe",Amount:"$121.77"},
        {id:1,Name:"Demo User",userid:"#717",paymentid:"#107",status:"Paid",Method:"Stripe",Amount:"$121.77"},
    ]

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Payments</Text>
            </View>
        </View>
        <ScrollView style={{backgroundColor:"#FFF"}}>
            {data.map(item=>{
                return(
                    <View style={styles.card} key={item.id}>
                        <View style={styles.idcontainer}>
                            <Text style={styles.darktxt}>Demo User</Text>
                            <Text style={[styles.darktxt,{color:"#f1b407"}]}>{item.userid}</Text>
                        </View>
                        <View style={styles.itemcontainer}>
                            <Text style={styles.lighttxt}>Payment ID</Text>
                            <Text style={styles.darktxt}>{item.paymentid}</Text>
                        </View>
                        <View style={styles.itemcontainer}>
                            <Text style={styles.lighttxt}>Payment Status</Text>
                            <Text style={styles.darktxt}>{item.status}</Text>
                        </View>
                        <View style={styles.itemcontainer}>
                            <Text style={styles.lighttxt}>Payment Method</Text>
                            <Text style={styles.darktxt}>{item.Method}</Text>
                        </View>
                        <View style={[styles.itemcontainer,{borderBottomWidth:0}]}>
                            <Text style={styles.lighttxt}>Amount</Text>
                            <Text style={styles.darktxt}>{item.Amount}</Text>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
    </>
  )
}

export default Payments

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
        borderWidth:1,
        margin:5,
        marginVertical:10,
        borderRadius:20,
        borderColor:"#f7f7f7"
    },
    idcontainer:{
        backgroundColor:"#f2f0df",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:15,
        paddingHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    darktxt:{
        color:"#000",
        fontSize:15,
        fontWeight:"700"
    },
    itemcontainer:{
        borderBottomWidth:1,
        paddingVertical:15,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderColor:"#f0f0f0"
    },
    lighttxt:{
        color:"grey",
        fontSize:15,
        fontWeight:"500"
    }
})