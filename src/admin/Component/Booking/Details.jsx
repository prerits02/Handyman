import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import Modal from "react-native-modal";

const State = {
    scrollOffset: null | 1
  };

const Details = ({ route }) => {

    const navigation = useNavigation()
    const { status } = route.params;
    const [ModalVisible,setModalVisible] = useState(false)

    const modaldata = [
        {id:1,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from pending approval to complete"},
        {id:2,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from pending approval to complete"},
        {id:3,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from pending approval to complete"},
        {id:4,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from pending approval to complete"},
        {id:5,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from ongaoin to in progress"},
        {id:6,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from accepted to ongoing"},
        {id:7,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking has been assigned to provider demo"},
        {id:8,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"Booking status has been changed from pending approval to complete"},
        {id:9,time:"12:35 PM",date:"22 Mar",status:"Update booking status",text:"New booking added by customer"},
    ]


      handleOnScroll = event => {
        // this.setState({
        //   scrollOffset: event.nativeEvent.contentOffset.y,
        // });

      };
    
      handleScrollTo = p => {
        // if (scrollViewRef==null) {
        //   setScrollOffset(1)
        // }
        // else{
        //     setScrollOffset(0)
        // }
      };

    

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>{status}</Text>
            </View>
            <TouchableOpacity onPress={()=>setModalVisible(true)}>
                <Text style={styles.chkstatus}>Check Status</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor:"#FFF"}}>
            <View style={styles.bidcon}>
                <Text style={styles.bidtxt}>Booking ID</Text>
                <Text style={styles.bidid}>#696</Text>
            </View>
            <View style={styles.detailscon}>
                <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                    <Text style={styles.detailheading}>Cleaning</Text>
                    <View style={{flexDirection:"row",gap:5}}>
                        <Text style={styles.date}>Date:</Text>
                        <Text style={styles.datetxt}>22 Mar, 2023</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:5}}>
                        <Text style={styles.date}>Time:</Text>
                        <Text style={styles.datetxt}>05:59 PM</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("BookingService")}>
                    <Image style={styles.img} source={require("../../../assets/images/wokerimgexample.jpg")} />
                </TouchableOpacity>
            </View>
            <Text style={styles.aboutp}>About Provider</Text>
            <View style={styles.providercontainer}>
                <View style={styles.profilecon}>
                    <View style={{width:"30%"}}>
                        <Image style={styles.providerimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
                    </View>
                    <View style={{width:"60%",gap:8}}>
                        <Text style={styles.providername}>Provider Demo</Text>
                        <View style={{flexDirection:"row"}}>
                            <FontAwesome name="star" size={17} color="#71c899"/>
                            <FontAwesome name="star" size={17} color="#71c899"/>
                            <FontAwesome name="star" size={17} color="#71c899"/>
                            <FontAwesome name="star" size={17} color="#71c899"/>
                            <FontAwesome name="star-half-full" size={17} color="#71c899"/>
                        </View>
                    </View>
                    <View style={{width:"10%"}}>
                        <MaterialIcons name="verified" size={28} color="#2a95ed"/>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Ionicons name="mail-outline" size={18} color="#000"/>
                        <Text style={styles.mail}>demo@provider.com</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="phone-call" size={18} color="#000"/>
                        <Text style={styles.mail}>01-23456789</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Ionicons name="location-outline" size={18} color="#000"/>
                        <Text style={styles.mail}>US</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="watch" size={18} color="#000"/>
                        <Text style={styles.mail}>2021</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.aboutp}>About Handyman</Text>
            <View style={styles.providercontainer}>
                <View style={styles.profilecon}>
                    <View style={{width:"30%"}}>
                        <Image style={styles.providerimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
                    </View>
                    <View style={{width:"70%",gap:8}}>
                        <Text style={styles.providername}>Provider Demo</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Ionicons name="mail-outline" size={18} color="#000"/>
                        <Text style={styles.mail}>demo@provider.com</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="phone-call" size={18} color="#000"/>
                        <Text style={styles.mail}>01-23456789</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Ionicons name="location-outline" size={18} color="#000"/>
                        <Text style={styles.mail}>US</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="watch" size={18} color="#000"/>
                        <Text style={styles.mail}>2021</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.aboutp}>About Customer</Text>
            <View style={styles.providercontainer}>
                <View style={styles.profilecon}>
                    <View style={{width:"30%"}}>
                        <Image style={styles.providerimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
                    </View>
                    <View style={{width:"70%",gap:8}}>
                        <Text style={styles.providername}>Provider Demo</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Ionicons name="mail-outline" size={18} color="#000"/>
                        <Text style={styles.mail}>demo@provider.com</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="phone-call" size={18} color="#000"/>
                        <Text style={styles.mail}>01-23456789</Text>
                    </View>
                </View>
                <View style={styles.providerdetails}>
                    <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
                        <Feather name="watch" size={18} color="#000"/>
                        <Text style={styles.mail}>2021</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.aboutp}>Extra Charges</Text>
            <View style={styles.chargesconatiner}>
                <Text style={styles.greytxt}>Extra Water</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={styles.greytxt}>2 * 100 = </Text>
                    <Text style={styles.blacktxt}>$200.00</Text>
                </View>
            </View>
            <Text style={styles.aboutp}>Price Details</Text>
            <View style={[styles.chargesconatiner,{flexDirection:"column"}]}>
                <View style={styles.pdetails}>
                    <Text style={styles.greytxt}>Price</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.blacktxt}>$200.00</Text>
                    </View>
                </View>
                <View style={styles.pdetails}>
                    <Text style={styles.greytxt}>Sub Total</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.greytxt}>$200.00 * 1 = </Text>
                        <Text style={styles.blacktxt}>$200.00</Text>
                    </View>
                </View>
                <View style={styles.pdetails}>
                    <View style={{flexDirection:"row",gap:5}}>
                        <Text style={styles.greytxt}>Coupon</Text>
                        <Text style={[styles.greytxt,{color:"#5e5b96"}]}>{"(HE45TYU)"}</Text>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.blacktxt,{color:"#5baf62"}]}>-$10.00</Text>
                    </View>
                </View>
                <View style={styles.pdetails}>
                    <Text style={styles.greytxt}>Total Charges</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.blacktxt}>$200.00</Text>
                    </View>
                </View>
                <View style={[styles.pdetails,{borderBottomWidth:0,paddingBottom:0,marginBottom:0}]}>
                    <Text style={styles.greytxt}>Total Amount</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={[styles.blacktxt,{color:"#64619d"}]}>$390.00</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.aboutp}>Payment Detail</Text>
            <View style={[styles.chargesconatiner,{flexDirection:"column",marginBottom:20}]}>
                <View style={styles.pdetails}>
                    <Text style={styles.greytxt}>ID</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.blacktxt}>#100</Text>
                    </View>
                </View>
                <View style={styles.pdetails}>
                    <Text style={styles.greytxt}>Method</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.blacktxt}>Stripe</Text>
                    </View>
                </View>
                <View style={[styles.pdetails,{borderBottomWidth:0,paddingBottom:0,marginBottom:0}]}>
                    <Text style={styles.greytxt}>Status</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Text style={styles.blacktxt}>Paid</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <Modal
            isVisible={ModalVisible}
            style={styles.modal}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
            onSwipeThreshold={20}
            swipeDirection={['down']}
            scrollTo={this.handleScrollTo}
            scrollOffset={1}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
        >
            <View style={styles.scrollableModal}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.modalContent}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                            <Text style={[styles.aboutp,{padding:0,marginHorizontal:0}]}>Booking History</Text>
                            <Text style={[styles.greytxt,{color:"#5e5b96"}]}>ID: #696</Text>
                        </View>
                        {modaldata.map(item=>{
                            return(
                                <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20}} key={item.id}>
                                    <View style={{width:"20%"}}>
                                        <Text style={styles.date}>{item.time}</Text>
                                        <Text style={[styles.aboutp,{padding:0,marginVertical:10,marginHorizontal:0,fontWeight:"400"}]}>{item.date}</Text>
                                    </View>
                                    <View style={{width:"20%",alignItems:"center",gap:2}}>
                                        <FontAwesome name="circle" color="#39af53"/>
                                        <View>
                                            <Entypo name="dots-three-vertical" color="#39af53" />
                                            <Entypo name="dots-three-vertical" color="#39af53" />
                                            <Entypo name="dots-three-vertical" color="#39af53" />
                                            <Entypo name="dots-three-vertical" color="#39af53" />
                                        </View>
                                    </View>
                                    <View style={{width:"60%"}}>
                                        <Text style={[styles.aboutp,{padding:0,marginVertical:0,marginHorizontal:0,fontWeight:"400"}]}>{item.status}</Text>
                                        <Text style={styles.date}>{item.text}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    </>
  )
}

export default Details

const styles = StyleSheet.create({
    head:{
        flexDirection:"row",
        paddingHorizontal:10,
        alignItems:"center",
        paddingVertical:10,
        backgroundColor:"#f1b407",
        justifyContent:"space-between"
    },
    chkstatus:{
        fontSize:15,
        color:"#000",
        fontWeight:"500"
    },
    heading:{
        marginLeft:20,
        fontSize:20,
        color:"#000",
        fontWeight:"700"
    },
    bidcon:{
        flexDirection:"row",
        borderBottomWidth:1,
        marginHorizontal:10,
        paddingVertical:20,
        justifyContent:"space-between",
        alignItems:"center"
    },
    bidtxt:{
        color:"#969696",
        fontSize:15,
        fontWeight:"600"
    },
    bidid:{
        color:"#66638a",
        fontSize:15,
        fontWeight:"700"
    },
    img:{
        width:100,
        height:100,
        borderRadius:10
    },
    detailscon:{
        flexDirection:"row",
        marginHorizontal:10,
        marginVertical:20,
        justifyContent:"space-between",
    },
    detailheading:{
        fontSize:18,
        color:"#000",
        fontWeight:"600",
        marginBottom:20
    },
    datetxt:{
        color:"#000",
        fontWeight:"600"
    },
    date:{
        color:"#969696",
        fontWeight:"600"
    },
    aboutp:{
        color:"#000",
        fontSize:15,
        fontWeight:"600",
        marginHorizontal:10,
        marginVertical:20
    },
    providerimg:{
        width:80,
        height:80,
        borderRadius:100
    },
    profilecon:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    providercontainer:{
        backgroundColor:"#eaecee",
        marginHorizontal:10,
        borderRadius:10,
        padding:20
    },
    providername:{
        fontSize:15,
        color:"#000",
        fontWeight:"600"
    },
    providerdetails:{
        marginVertical:10
    },
    mail:{
        fontSize:15,
        color:"#4d5051",
        fontWeight:"500"
    },
    chargesconatiner:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:10,
        backgroundColor:"#f5f7f9",
        padding:20,
        borderRadius:20,
    },
    greytxt:{
        color:"#8b8d8f",
        fontSize:15,
        fontWeight:"600"
    },
    blacktxt:{
        color:"#000",
        fontSize:15,
        fontWeight:"600"
    },
    pdetails:{
        borderBottomWidth:1,
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom:15,
        borderColor:"#ebedee",
        marginBottom:15
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
    scrollableModal: {
        height: 300,
        backgroundColor:"#FFF",
        backgroundColor:"#FFF",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20
      },

})