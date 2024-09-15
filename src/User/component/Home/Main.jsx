import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Inoicons from 'react-native-vector-icons/Ionicons'

const Main = () => {

  const card_data = [
    {id:1,img: require("../../../assets/images/destroyall.jpg"),label1:"Destroy all",label2:"your uninvited",label3:"guests at Home",btntxt:"Book Now"},
    {id:2,img: require("../../../assets/images/destroyall.jpg"),label1:"Destroy all",label2:"your uninvited",label3:"guests at Home",btntxt:"Book Now"},
    {id:3,img: require("../../../assets/images/destroyall.jpg"),label1:"Destroy all",label2:"your uninvited",label3:"guests at Home",btntxt:"Book Now"},
  ]

  const cleanpest_data = [
    {id:1,img: require("../../../assets/images/mopexample.jpg"),head:"Bathroom Cleaning",service_type:"Service at Home",price:"$49"},
    {id:2,img: require("../../../assets/images/car_clean_example.jpg"),head:"Car Cleaning",service_type:"Service at Home",price:"$149"},
    {id:3,img: require("../../../assets/images/housecleanexample.jpg"),head:"Full House Cleaning",service_type:"Service at Home",price:"$200"},
  ]

  const services_data = [
    {id:1,img: require("../../../assets/images/servicesexample.png"),head:"Salon",service_type:"Free Waxing",price:"$69"},
    {id:2,img: require("../../../assets/images/massageexample.jpg"),head:"Massage Therapy",service_type:"Free hand massage",price:"$79"},
    {id:3,img: require("../../../assets/images/servicesexample.png"),head:"Hair cutting",service_type:"Free head massage",price:"$100"},
  ]

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
              <AntDesign name="search1" size={24} color={"black"} />
              <TextInput placeholder='Search' style={{width:"100%",paddingRight:20,color:"#000",paddingLeft:10}} placeholderTextColor="grey"/>
          </View>
          {/* cards */}
          <ScrollView style={styles.cardContainer} horizontal showsHorizontalScrollIndicator={false}>
            {card_data.map(item=>{
              return(
              <ImageBackground source={item.img} borderRadius={15} style={styles.card} key={item.id}>
                <Text style={{color:"#FFF",fontSize:20,fontWeight:"900"}}>Destroy all</Text>
                <Text style={{color:"#FFF",fontSize:13}}>your uninvited</Text>
                <Text style={{color:"#FFF",fontSize:13}}>guests at Home</Text>
                <TouchableOpacity style={styles.cardbtn}>
                  <Text style={{color:"#000",fontSize:15,fontWeight:"700"}}>Book Now</Text>
                </TouchableOpacity>
              </ImageBackground>
              )
            })}
          </ScrollView>
          {/* services */}
          <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:20}}>
            <Text style={{color:"#000",fontWeight:"900",fontSize:20}}>Services</Text>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:2}}>
              <Text style={{color:"#1f8aff"}}>View all</Text>
              <FontAwesome name="angle-double-right" color="#1f8aff" size={20}/>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:5,borderColor:"#f0f0f0"}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.listContainer}>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <MaterialCommunityIcons name="air-conditioner" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Ac Services</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <MaterialIcons name="clean-hands" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Cleaning</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <FontAwesome5 name="paint-roller" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Painters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <MaterialIcons name="electric-bolt" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Electrician</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <Inoicons name="car-sport-sharp" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Mechanic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <FontAwesome6 name="user-secret" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Driver</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listContainerButton}>
                <View style={styles.listiconContainer}>
                  <Inoicons name="water-sharp" size={25} color="#1f8aff"/>
                </View>
                <Text style={{fontSize:12,textAlign:"center",color:"grey"}}>Plumber</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* cleaning and pest control */}
          <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:20}}>
            <Text style={{color:"#000",fontWeight:"900",fontSize:20,width:120}}>Cleaning & pest Control</Text>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end",gap:2}}>
              <Text style={{color:"#1f8aff"}}>View all</Text>
              <FontAwesome name="angle-double-right" color="#1f8aff" size={20}/>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal:20,borderBottomWidth:5,borderColor:"#f0f0f0",paddingBottom:20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {cleanpest_data.map(item =>{
                return(
                <TouchableOpacity key={item.id} style={{marginRight:10}}>
                  <Image style={styles.cleanpestimg} source={item.img}/>
                  <Text style={{marginTop:10,fontSize:17,color:"#000",fontWeight:"700"}}>{item.head}</Text>
                  <Text style={{fontWeight:"700",color:"grey"}}>{item.service_type}</Text>
                  <View style={{flexDirection:"row",gap:5}}>
                    <Text style={{fontSize:12,color:"grey"}}>Start at</Text>
                    <Text style={{fontSize:12,color:"green",fontWeight:"700"}}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginVertical:20}}>
            <Text style={{color:"#000",fontWeight:"900",fontSize:20}}>Our Best Services</Text>
            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center",alignItems:"flex-end",gap:2}}>
              <Text style={{color:"#1f8aff"}}>View all</Text>
              <FontAwesome name="angle-double-right" color="#1f8aff" size={20}/>
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal:20,borderBottomWidth:5,borderColor:"#f0f0f0",paddingBottom:20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {services_data.map(item =>{
                return(
                <TouchableOpacity key={item.id} style={{marginRight:10}}>
                  <Image style={styles.cleanpestimg} source={item.img}/>
                  <Text style={{marginTop:10,fontSize:17,color:"#000",fontWeight:"700"}}>{item.head}</Text>
                  <Text style={{fontWeight:"700",color:"grey"}}>{item.service_type}</Text>
                  <View style={{flexDirection:"row",gap:5}}>
                    <Text style={{fontSize:12,color:"grey"}}>Start at</Text>
                    <Text style={{fontSize:12,color:"green",fontWeight:"700"}}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
          <View style={{marginBottom:300}}>

          </View>
      </ScrollView>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#f1f1f1",
        borderRadius:15,
        marginHorizontal:20,
        paddingHorizontal:20,
        marginVertical:10
    },
    cardContainer:{
      marginHorizontal:10,
      marginVertical:10,
    },
    card:{
      backgroundColor:"grey",
      padding:15,
      borderRadius:15,
      width:Dimensions.get("window").width-50,
      margin:10
    },
    cardbtn:{
      backgroundColor:"#FFF",
      width:100,
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      borderRadius:5,
      paddingVertical:5,
      marginBottom:20
    },
    listContainer:{
      margin:10
    },
    listiconContainer:{
      borderWidth:1,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:10,
      borderColor:"#f0f0f0",
      marginBottom:10,
      width:70,
      height:70
    },
    listContainerButton:{
      margin:10,
      justifyContent:"center",
      alignItems:"center"
    },
    cleanpestimg:{
      width:170,
      height:100,
      borderRadius:10,
      resizeMode:"cover"
    }
})