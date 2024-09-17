import { Dimensions, ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Signin = () => {

    const navigation = useNavigation()

    const [Number,SetNumber] = useState("")
    const [Disabled,SetDisabled] = useState(true)

    const InputChange = (text) => {
        SetNumber(text)

        if (text.length > 4){
            SetDisabled(false)
        }
        else{
            SetDisabled(true)
        }
    }

    const Submit = () => {
        if (Number == "admin"){
            navigation.navigate("AdminHome")
        }
        else{
            navigation.navigate("Main")
        }
    }

  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#000"  />
        <ImageBackground source={require("../assets/images/SigninBg.png")} style={styles.BgImage}>
            <View style={styles.Container}>
                <Text style={styles.Heading}>HANDYMAN</Text>
                <TextInput value={Number} onChangeText={(text)=>InputChange(text)} placeholder='Enter Mobile Number' style={styles.Input} placeholderTextColor="#989898" />
                <TouchableOpacity style={Disabled?styles.Btn:styles.Enabled} onPress={Submit}>
                    <Text style={Disabled?styles.BtnTxt:styles.EnabledTxt}>Get Verification Code</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </>
  )
}

export default Signin

const styles = StyleSheet.create({
    BgImage:{
        height:Dimensions.get("window").height,
        width:Dimensions.get("window").width
    },
    Container:{
        height:Dimensions.get("window").height,
        justifyContent:"center",
        alignItems:"center"
    },
    Input:{
        borderWidth:1,
        borderRadius:5,
        width:"90%",
        paddingHorizontal:10,
        fontSize:18,
        fontWeight:"600",
        borderColor:"#e0e0e0",
        color:"#000"
    },
    Heading:{
        fontSize:35,
        fontWeight:"700",
        marginBottom:40,
        color:"#000"
    },
    Btn:{
        backgroundColor:"#ededed",
        width:"90%",
        marginTop:40,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        borderRadius:5
    },
    BtnTxt:{
        color:"#acacac",
        fontSize:17,
        fontWeight:"700"
    },
    Enabled:{
        backgroundColor:"#f1b407",
        width:"90%",
        marginTop:40,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        borderRadius:5
    },
    EnabledTxt:{
        color:"#000",
        fontSize:17,
        fontWeight:"700"
    }
})