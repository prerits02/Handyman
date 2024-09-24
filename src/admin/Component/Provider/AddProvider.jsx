import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const AddProvider = () => {

    const [visible, setVisible ] = useState(true)
    const [selected, setSelected] = useState('Company');  // Default to 'All'
    const navigation = useNavigation()

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Provider</Text>
            </View>
        </View>
        <ScrollView style={{padding:10,backgroundColor:"#FFF"}}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='First Name' />
                <FontAwesome name="user-o" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Last Name' />
                <FontAwesome name="user-o" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='User Name' />
                <FontAwesome name="user-o" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Email Address' />
                <Ionicons name="mail-outline" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Contact Number' />
                <Feather name="phone-call" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Address' />
                <Ionicons name="location-outline" size={20} color="grey"/>
            </View>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={visible} style={styles.input} placeholder='Password' />
                <TouchableOpacity onPress={()=>setVisible(prevVisible => !prevVisible)}>
                    {visible?
                        <Ionicons name="eye-off-outline" size={20} color="grey"/>
                    :
                        <Ionicons name="eye" size={20} color="grey"/>
                    }
                </TouchableOpacity>
            </View>
            <View style={[styles.pickerConatiner]}>
                <Picker
                    style={styles.picker}
                    selectedValue={selected}
                    onValueChange={(itemValue) => setSelected(itemValue)}
                >
                    <Picker.Item label="Select user type" value="" />
                    <Picker.Item label="Option 2" value="Option 2" />
                    <Picker.Item label="Option 3" value="Option 3" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    </>
  )
}

export default AddProvider

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
    inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#f5f7f9",
        borderRadius:10,
        marginHorizontal:5,
        paddingHorizontal:15,
        marginBottom:15
    },
    input:{
        width:"90%",
        color:"#000",
        fontWeight:"600"
    },
    pickerConatiner:{
        backgroundColor:"#f5f7f9",
        borderRadius:10,
        marginHorizontal:5,
        marginBottom:15
    },
    btn:{
        backgroundColor:"#f1b407",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:15,
        marginTop:20,
        borderRadius:10,
        marginBottom:30
    },
    btntxt:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"600"
    },
})