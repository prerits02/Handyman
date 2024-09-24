import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';

const AddCategory = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState('All');  // Default to 'All'
    const [isSelected, setSelection] = useState(false);
    const [imageUri, setImageUri] = useState(null);

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
                <Text style={styles.heading}>Add Category</Text>
            </View>
        </View>
        <View style={{padding:10, backgroundColor:"#FFF", height:Dimensions.get("window").height}}>
            <View style={styles.categoryrow1}>
            {imageUri ? (
                    <TouchableOpacity style={{width:"25%",position:"relative"}}>
                        <Image style={styles.image} source={{ uri: imageUri }} />
                        <View style={styles.camera}>
                            <AntDesign name="camera" size={18} color="#FFF" />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={{width:"25%",position:"relative"}} onPress={selectImage}>
                        {/* <Image style={styles.image} source={require("../../../assets/images/wokerimgexample.jpg")} /> */}
                        <View style={[styles.image,{backgroundColor:"#f0efea"}]}>
                            
                        </View>
                        <View style={styles.camera}>
                            <AntDesign name="camera" size={18} color="#FFF" />
                        </View>
                    </TouchableOpacity>
            )}
                {/* <TouchableOpacity style={{width:"25%",position:"relative"}}>
                    <Image style={styles.image} source={require("../../../assets/images/wokerimgexample.jpg")} />
                    <View style={styles.camera}>
                        <AntDesign name="camera" size={18} color="#FFF" />
                    </View>
                </TouchableOpacity> */}
                <View style={{width:"75%"}}>
                    <Text style={styles.namehead}>Name</Text>
                    <TextInput style={styles.name} placeholder='Name' />
                </View>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.namehead}>Select Status</Text>
                <View style={styles.pickercontainer}>
                    <Picker
                        style={styles.picker}
                        selectedValue={selected}
                        onValueChange={(itemValue) => setSelected(itemValue)}
                    >
                        <Picker.Item label="Select Status" value=""  />
                        <Picker.Item label="option1" value="option1" />
                        <Picker.Item label="option2" value="option2" />
                    </Picker>
                </View>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={styles.namehead}>Description</Text>
                <TextInput style={styles.name} placeholder='Description' multiline = {true} numberOfLines = {1} />
            </View>
            <View style={{marginVertical:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Text style={styles.namehead}>Set as Feature</Text>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    tintColors={{ true: '#f1b407', false: '#f1b407' }}
                />
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Save</Text>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default AddCategory

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
    categoryrow1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"s"
    },
    image:{
        width:80,
        height:80,
        borderRadius:100
    },
    name:{
        backgroundColor:"#f5f7f9",
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:5,
        color:"#000",
        fontWeight:"600"
    },
    namehead:{
        color:"grey",
        fontSize:13,
        fontWeight:"500"
    },
    pickercontainer:{
        backgroundColor:"#f5f7f9",
        marginVertical:5,
        borderRadius:10
    },
    btn:{
        backgroundColor:"#f1b407",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        marginVertical:10,
        borderRadius:10
    },
    btntxt:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"600"
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
      camera:{
        backgroundColor:"#f1b407",
        width:25,
        height:25,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        right:15
      }
})