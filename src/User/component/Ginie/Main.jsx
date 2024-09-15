import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Main = () => {

    const navigation = useNavigation()

    const advert_data = [
        {id:1,heaading:"Need OTC Medicines From Nearby Store?",para:"Find a store & place an order for medicines."},
        {id:2,heaading:"Craving For Homemade Food?",para:"Send or receive homemade food parcels, instantly."},
        {id:3,heaading:"30 Lakh+ happy customers",para:"saved countless hours with genie!"},
        {id:4,heaading:"Forget Something At Home?",para:"Send or receive anything from home with Genie."},
        {id:5,heaading:"No Time To Visit The Laundary Shop?",para:"Get your laundry picked up or dropped off fast."},
        {id:6,heaading:"Avoid Traffic & Get Things Done",para:"Pick up or drop off anything with Genie."},
    ]

  return (
    <View>
        <View style={styles.location}>
            <Text style={{color:"#000",fontWeight:"700",fontSize:17}}>Pick up or send anything</Text>
            <Text style={{paddingVertical:10}}>Sit back,relax and let Genie do the rest</Text>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("GinieLocations")}>
                <Text style={{color:"#000",fontSize:18,fontWeight:"700"}}>Set pick up & drop location</Text>
                <AntDesign color="#000" name="arrowright" size={22} />
            </TouchableOpacity>
        </View>
        <View style={styles.adverts}>
            <Text style={{color:"#000",fontSize:15,fontWeight:"700"}}>Do more with Genie</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {advert_data.map(item=>{
                    return(
                    <View style={styles.cardContainer} key={item.id}>
                        <Text style={{color:"#FFF",fontSize:22,fontWeight:"900",width:250}}>{item.heaading}</Text>
                        <Text style={{color:"#FFF",width:200,paddingVertical:15}}>{item.para}</Text>
                        <TouchableOpacity style={styles.advertbtn}>
                            <Text style={{color:"#000",fontWeight:"700"}}>BOOK GENIE</Text>
                        </TouchableOpacity>
                    </View>
                    )
                })}
            </ScrollView>
        </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    location:{
        borderWidth:1,
        margin:20,
        borderRadius:10,
        padding:15,
        borderColor:"#e5e5e5"
    },
    btn:{
        backgroundColor:"#f1b407",
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    adverts:{
        padding:20,
        backgroundColor:"#f1f0f5"
    },
    cardContainer:{
        marginVertical:15,
        paddingHorizontal:10,
        paddingVertical:30,
        backgroundColor:"grey",
        width:300,
        borderRadius:10,
        marginRight:15
    },
    advertbtn:{
        backgroundColor:"#FFF",
        width:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
        paddingVertical:5
    }
})