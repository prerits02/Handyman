import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Head from '../Component/Head/Head'

const Booking = () => {

  const data = [
    {id:1,img:require("../../assets/images/wokerimgexample.jpg"),status:"Pending",bid:"#725",name:"electrical repairs, rewires",price:"$108.00",discount:"10%",date:"25 Mar, 2023 At 10:56 AM",Provider:"Provider Demo"},
    {id:2,img:require("../../assets/images/wokerimgexample.jpg"),status:"Pending",bid:"#724",name:"Cleaning",price:"$200.00",discount:"none",date:"25 Mar, 2023 At 02:51 PM",Provider:"Provider Demo"},
    {id:3,img:require("../../assets/images/wokerimgexample.jpg"),status:"Completed",bid:"#721",name:"Test",price:"$121.77",discount:"1%",date:"23 Mar, 2023 At 11:06 PM",Provider:"Provider Demo"},
]

  return (
    <>
      <Head name="Booking"/>
      <ScrollView style={{backgroundColor:"#FFF"}}>
        {data.map(item=>{
              return(
                  <View style={styles.cardContainer} key={item.id}>
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
                  </View>

              )
          })}
      </ScrollView>
    </>
  )
}

export default Booking

const styles = StyleSheet.create({
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
  },
  flexcontainer:{
    flexDirection:"row",
    gap:20,
  },
})