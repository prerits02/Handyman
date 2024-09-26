import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'

const AddHandyman = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState('Freelancer');  // Default to 'All'
    const [selectedProvider, setSelectedProvider] = useState('Provider Demo');  // Default to 'All'

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Handyman</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#FFF",paddingHorizontal:10}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal:10,marginTop:20}}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Fisrt Name' style={styles.input}/>
                        <FontAwesome name="user-o" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Last Name' style={styles.input}/>
                        <FontAwesome name="user-o" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='User Name' style={styles.input}/>
                        <FontAwesome name="user-o" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Email Address' style={styles.input}/>
                        <Ionicons name="mail-outline" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Contact Number' style={styles.input}/>
                        <Feather name="phone-call" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Designation' style={styles.input}/>
                        <FontAwesome name="user-o" size={20} color="grey"/>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='Address' style={styles.input}/>
                        <SimpleLineIcons name="location-pin" size={20} color="grey"/>
                    </View>
                    <View style={styles.pickercontainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={selected}
                            onValueChange={(itemValue) => setSelected(itemValue)}
                        >
                            <Picker.Item label="Select User Type" value="" />
                            <Picker.Item label="Option 2" value="Option 2" />
                            <Picker.Item label="Option 3" value="Option 3" />
                        </Picker>
                    </View>
                    <View style={styles.pickercontainer}>
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedProvider}
                            onValueChange={(itemValue) => setSelectedProvider(itemValue)}
                        >
                            <Picker.Item label="Select Provider" value="" />
                            <Picker.Item label="Option 2" value="Option 2" />
                            <Picker.Item label="Option 3" value="Option 3" />
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity style={styles.save}>
                    <Text style={styles.savetxt}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </>
  )
}

export default AddHandyman

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
        backgroundColor:"#f5f7f9",
        marginBottom:20,
        borderRadius:10,
    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10,
        marginVertical:20
    },
    btn:{
        backgroundColor:"#f5f7f9",
        padding:10,
        borderRadius:10,
        alignItems:"center",
        gap:5,
        paddingHorizontal:15,
    },
    btntxt:{
        color:"grey",
        fontSize:13
    },
    inputContainer:{
        backgroundColor:"#f5f7f9",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:10,
        paddingHorizontal:15,
        marginBottom:20
    },
    input:{
        width:"90%",
        fontSize:15,
        fontWeight:"600",
        color:"#333537"
    },
    save:{
        backgroundColor:"#f1b407",
        justifyContent:'center',
        alignItems:"center",
        paddingVertical:15,
        borderRadius:10,
        marginBottom:60
    },
    savetxt:{
        fontSize:15,
        color:"#000",
        fontWeight:"700"
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
      label:{
        color:"grey",
        paddingLeft:10,
        fontWeight:"600",
        marginBottom:-8,
        zIndex:999,
        fontSize:13
      }
})