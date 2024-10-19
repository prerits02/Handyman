import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const NewBooking = () => {

  const navigation = useNavigation()

  

   
  return (
    <View style={{backgroundColor:"#FFF"}}>
        <View style={styles.headingcon}>
            <Text style={styles.headtxt}>New Booking</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Booking")}>
                <Text style={styles.viewbtntxt}>View all</Text>
            </TouchableOpacity>
        </View>
        {data.map(item=>{
            return(
                <TouchableOpacity style={styles.cardContainer} key={item.id} onPress={()=>navigation.navigate("BookingDetails",{status:item.status})}>
                    <View style={styles.flexcontainer}>
                        <Image style={styles.cardimg} source={item.img} />
                        <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"80%"}}>
                                {item.status=="Completed"?
                                    <Text style={styles.completed}>{item.status}</Text>
                                :
                                    <Text style={styles.cardstatus}>{item.status}</Text>
                                }
                                <Text style={styles.itembid}>{item.bid}</Text>
                            </View>
                            <View>
                                <Text style={styles.itemname}>{item.name}</Text>
                            </View>
                            <View style={{flexDirection:"row",gap:5}}>
                                <Text style={styles.itemprice}>{item.price}</Text>
                                {item.discount=="none"?null:
                                    <Text style={styles.itemdiscount}>{"("+item.discount+" Off)"}</Text>
                                }
                            </View>
                        </View>
                    </View>
                    <View style={styles.carddatecontainer}>
                        <View style={styles.carddate}>
                            <Text style={styles.dateheading}>Date & Time</Text>
                            <Text style={styles.datetxt}>{item.date}</Text>
                        </View>
                        <View style={styles.cardprovider}>
                            <Text style={styles.dateheading}>Provider</Text>
                            <Text style={styles.datetxt}>{item.Provider}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            )
        })}
    </View>
  )
}

export default NewBooking

const styles = StyleSheet.create({
    headingcon:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:20,
        marginHorizontal:10
      },
      headtxt:{
        fontWeight:"600",
        fontSize:16,
        color:"#343638"
      },
      viewbtntxt:{
        fontSize:16,
        color:"#929496"
      },
      flexcontainer:{
        flexDirection:"row",
        gap:20,
      },
      cardContainer:{
        borderWidth:1,
        marginHorizontal:10,
        borderRadius:15,
        padding:20,
        marginVertical:10,
        borderColor:"#f3f3f3"
      },
      cardimg:{
        width:100,
        height:100,
        borderRadius:15
      },
      cardstatus:{
        backgroundColor:"#faeaec",
        color:"#c3505f",
        fontWeight:"900",
        paddingVertical:3,
        paddingHorizontal:8,
        borderRadius:8
      },
      completed:{
        backgroundColor:"#eafaec",
        color:"#50c35c",
        fontWeight:"900",
        paddingVertical:3,
        paddingHorizontal:8,
        borderRadius:8
      },
      itembid:{
        color:"#66638a",
        fontSize:15,
        fontWeight:"700"
      },
      itemname:{
        color:"#000",
        fontSize:15,
        fontWeight:"700"
      },
      itemprice:{
        color:"#66638a",
        fontSize:15,
        fontWeight:"700"
      },
      itemdiscount:{
        color:"#73b277",
        fontSize:15,
        fontWeight:"700"
      },
      carddatecontainer:{
        backgroundColor:"#f5f7f9",
        marginTop:20,
        borderRadius:20,
        paddingHorizontal:10,
      },
      carddate:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
        borderBottomWidth:1,
        paddingHorizontal:5,
        borderColor:"#e9ebec"
      },
      cardprovider:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:15,
        paddingHorizontal:5
      },
      dateheading:{
        color:"#898b8d",
        fontSize:15,
        fontWeight:"700"
      },
      datetxt:{
        color:"#000",
        fontSize:15,
        fontWeight:"700"
      }
})