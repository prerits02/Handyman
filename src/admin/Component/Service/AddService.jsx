import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

const AddService = () => {

    const [selected, setSelected] = useState('Company');  // Default to 'All'
    const [isSelected, setIsSelection] = useState(false);
    const [Subselected, setSubSelected] = useState('Company');  // Default to 'All'
    const [Addressselected, setAddressSelected] = useState('Company');  // Default to 'All'
    const [imageUri, setImageUri] = useState(null);
    const navigation = useNavigation()

    const selectImage = () => {
        // Open image picker
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const uri = response.assets[0].uri;
              setImageUri(uri);
            }
          }
        );
      };

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Service</Text>
            </View>
        </View>
        <ScrollView style={{padding:10, backgroundColor:"#FFF"}}>
        {imageUri ? (
            // <TouchableOpacity style={styles.imgContainer}>
            //     <Ionicons name="image-outline" size={30} color="grey" />
            //     <Text style={{color:"#000",fontSize:15,fontWeight:"600"}}>Choose Image</Text>
            // </TouchableOpacity>
            <TouchableOpacity onPress={selectImage}>
                <Image source={{ uri: imageUri }} style={[styles.imgContainer,{resizeMode:"contain"}]} />
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={styles.imgContainer} onPress={selectImage}>
                <Ionicons name="image-outline" size={30} color="grey" />
                <Text style={{color:"#000",fontSize:15,fontWeight:"600"}}>Choose Image</Text>
            </TouchableOpacity>
        )}
            <Text style={styles.notes}>Note: You can upload images with "jpg", "png", "jpeg" extensions & you can select multiple images</Text>
            <View style={styles.bgContainer}>
                <TextInput style={styles.input} placeholder='Service Name' />
                <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Category</Text>
                <View style={[styles.input,{paddingHorizontal:0}]}>
                    <Picker
                        style={styles.picker}
                        selectedValue={selected}
                        onValueChange={(itemValue) => setSelected(itemValue)}
                    >
                        <Picker.Item label="Select Category" value="" />
                        <Picker.Item label="Option 2" value="Option 2" />
                        <Picker.Item label="Option 3" value="Option 3" />
                    </Picker>
                </View>
                <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Sub Category</Text>
                <View style={[styles.input,{paddingHorizontal:0}]}>
                    <Picker
                        style={styles.picker}
                        selectedValue={Subselected}
                        onValueChange={(itemValue) => setSubSelected(itemValue)}
                    >
                        <Picker.Item label="Select SubCategory" value="" />
                        <Picker.Item label="Option 2" value="Option 2" />
                        <Picker.Item label="Option 3" value="Option 3" />
                    </Picker>
                </View>
                <Text style={{fontSize:15,fontWeight:"600",color:"#f1b407",marginVertical:20}}>Pick A Provider</Text>
                <Text style={{marginVertical:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Service Addresses</Text>
                <View style={[styles.input,{paddingHorizontal:0}]}>
                    <Picker
                        style={styles.picker}
                        selectedValue={Addressselected}
                        onValueChange={(itemValue) => setAddressSelected(itemValue)}
                    >
                        <Picker.Item label="Select Service Addresses" value="" />
                        <Picker.Item label="Option 2" value="Option 2" />
                        <Picker.Item label="Option 3" value="Option 3" />
                    </Picker>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{width:"47%"}}>
                        <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Type</Text>
                        <View style={[styles.input,{paddingHorizontal:0}]}>
                            <Picker
                                style={styles.picker}
                                selectedValue={Addressselected}
                                onValueChange={(itemValue) => setAddressSelected(itemValue)}
                            >
                                <Picker.Item label="Fixed" value="Fixed" />
                                <Picker.Item label="Option 2" value="Option 2" />
                                <Picker.Item label="Option 3" value="Option 3" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{width:"47%"}}>
                        <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Status</Text>
                        <View style={[styles.input,{paddingHorizontal:0}]}>
                            <Picker
                                style={styles.picker}
                                selectedValue={Addressselected}
                                onValueChange={(itemValue) => setAddressSelected(itemValue)}
                            >
                                <Picker.Item label="Active" value="Active" />
                                <Picker.Item label="Option 2" value="Option 2" />
                                <Picker.Item label="Option 3" value="Option 3" />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                    <View style={{width:"47%"}}>
                        <TextInput style={styles.input} placeholder='Price Name' />
                    </View>
                    <View style={{width:"47%"}}>
                        <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Discount</Text>
                        <TextInput style={styles.input} value='0' />
                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
                    <View style={{width:"47%"}}>
                        <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Duration : Hours</Text>
                        <TextInput style={styles.input} value='00' />
                    </View>
                    <View style={{width:"47%"}}>
                        <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Duration : Minute</Text>
                        <TextInput style={styles.input} value='00' />
                    </View>
                </View>
                <TextInput style={[styles.input,{marginVertical:20}]} placeholder='Description' multiline={true} numberOfLines={4} />
                <View style={{marginVertical:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{color:"grey",fontWeight:"600"}}>Set as Feature</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setIsSelection}
                        style={styles.checkbox}
                        tintColors={{ true: '#f1b407', false: '#f1b407' }}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    </>
  )
}

export default AddService

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
    imgContainer:{
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        borderWidth:2,
        height:150,
        borderRadius:10,
        borderStyle:"dashed",
        borderColor:"#c9c8c3"
    },
    notes:{
        fontSize:10,
        color:"grey",
        marginVertical:10
    },
    bgContainer:{
        backgroundColor:"#f4f7f9",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10
    },
    input:{
        backgroundColor:"#FFF",
        paddingHorizontal:10,
        color:"grey",
        fontWeight:"500",
        borderRadius:10
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