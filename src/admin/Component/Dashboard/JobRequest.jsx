import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const JobRequest = () => {

  const navigation = useNavigation()

    const data = [
        {id:1,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Test job",price:"$34.00",status:"Requested",date:"3/23/2023 02:59 AM"},
        {id:2,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Jsjjd",price:"$500.00",status:"Requested",date:"3/23/2023 02:01 AM"},
        {id:3,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Test",price:"$1,000.00",status:"Requested",date:"3/23/2023 02:59 AM"},
        {id:4,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Test",price:"$1,000.00",status:"Requested",date:"3/23/2023 10:11 AM"},
        {id:5,img:require("../../../assets/images/wokerimgexample.jpg"),name:"Service Mesin Ac",price:"$200.00",status:"Requested",date:"3/23/2023 02:59 AM"},
    ]

  return (
    <View style={{backgroundColor:"#FFF",paddingBottom:10}}>
        <View style={styles.headingcon}>
            <Text style={styles.headtxt}>Job Request List</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("JobReqList")}>
                <Text style={styles.viewbtntxt}>View all</Text>
            </TouchableOpacity>
        </View>
        {data.map(item=>{
            return(
                <View key={item.id} style={styles.container}>
                    <Image style={styles.cardimg} source={item.img} />
                    <View style={{flexDirection:"column",justifyContent:"space-between",width:"72%"}}>
                        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                          <Text style={styles.name}>{item.name}</Text>
                          <Text style={styles.status}>{item.status}</Text>
                        </View>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
            )
        })}
    </View>
  )
}

export default JobRequest

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
      container:{
        backgroundColor:"#f5f7f9",
        marginHorizontal:10,
        padding:10,
        borderRadius:15,
        marginVertical:10,
        flexDirection:"row",
        gap:15
      },
      cardimg:{
        width:80,
        height:80,
        borderRadius:15
      },
      price:{
        color:"#000",
        fontSize:15,
        fontWeight:"700"
      },
      status:{
        backgroundColor:"#eafaec",
        color:"#50c35c",
        fontWeight:"900",
        paddingVertical:3,
        paddingHorizontal:8,
        borderRadius:8
      },
      name:{
        color:"#424446",
        fontSize:15,
        fontWeight:"700"
      },
      date:{
        color:"#888a8c",
        fontSize:15,
        fontWeight:"600"
      }
})