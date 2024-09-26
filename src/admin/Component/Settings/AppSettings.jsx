import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const AppSettings = () => {

    const [isSelected, setIsSelection] = useState(false);
    const navigation = useNavigation()
    const [chkSelected, setchkSelection] = useState(false);

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>App Settings</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#FFF",height:Dimensions.get("window").height}}>
            <View style={styles.bgContainer}>
                    <Text style={{color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Language</Text>
                    <View style={[styles.input,{paddingHorizontal:0}]}>
                        <Picker
                            style={styles.picker}
                            selectedValue={isSelected}
                            onValueChange={(itemValue) => setIsSelection(itemValue)}
                        >
                            <Picker.Item label="English" value="English" />
                            <Picker.Item label="Hindi" value="Hindi" />
                        </Picker>
                    </View>
                    <Text style={{marginTop:15,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>App Theme</Text>
                    <View style={[styles.input,{paddingHorizontal:0}]}>
                        <Picker
                            style={styles.picker}
                            selectedValue={chkSelected}
                            onValueChange={(itemValue) => setchkSelection(itemValue)}
                        >
                            <Picker.Item label="Light" value="Light" />
                            <Picker.Item label="Dark" value="Dark" />
                            <Picker.Item label="System Default" value="System Default" />
                        </Picker>
                    </View>
                    {/* <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt}>Save</Text>
                    </TouchableOpacity> */}
            </View>
        </View>
    </>
  )
}

export default AppSettings

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
    bgContainer:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginTop:10
    },
    input:{
        backgroundColor:"#f4f7f9",
        paddingHorizontal:10,
        color:"grey",
        fontWeight:"500",
        borderRadius:10,
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