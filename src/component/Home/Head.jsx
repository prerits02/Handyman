import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const Head = () => {

    const navigation = useNavigation()

  return (
    <View>
        {/* <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10}}>
                <FontAwesome6 name="location-dot" size={22}/>
                <View>
                    <Text style={{fontSize:13}}>Current Location</Text>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10}}>
                        <Text style={{fontWeight:"600"}}>New York City</Text>
                        <AntDesign name="caretdown" size={10}/>
                    </View>
                </View>
            </View>
            <View style={styles.userContainer}>
                <Feather name="user" color="#FFF" size={22}/>
            </View>
        </View> */}
        {/* Handyman */}
        <View style={styles.Logo}>
            <View style={{justifyContent:"center",alignItems:"center",gap:10}}>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:"700",color:"#000"}}>HANDYMAN</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.userContainer} onPress={()=>{navigation.navigate("Profile")}}>
                <Feather name="user" color="#FFF" size={22}/>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10}}>
                <FontAwesome6 name="location-dot" size={22} color="grey"/>
                <View>
                    <Text style={{fontSize:13,color:"grey"}}>Current Location</Text>
                    <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10}}>
                        <Text style={{fontWeight:"600",color:"grey"}}>New York City</Text>
                        <AntDesign name="caretdown" size={10} color="grey"/>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartContainer}>
                <Feather name="shopping-cart" size={22} color="grey"/>
                <View style={styles.cartno}>
                    <Text style={{color:"#FFF",fontWeight:"600"}}>1</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Head

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:10,
        // backgroundColor:"#f1b407"
    },
    Logo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#f1b407"
    },
    userContainer:{
        backgroundColor:"#f1b951",
        borderRadius:100,
        padding:8
    },
    cartContainer:{
        position:"relative",
        borderRadius:100,
        padding:10,
        borderWidth:1,
        borderColor: "#f0f0f0"
    },
    cartno:{
        position:"absolute",
        right:-5,
        top:-5,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        backgroundColor:"red",
        paddingHorizontal:5
    }
})
