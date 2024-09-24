import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from '@react-navigation/native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal";

const Earning = () => {

  const navigation = useNavigation()
  const data = [
    {id:1,name:"Provider Demo",totalearning:"$32886.96",myearning:"$1700.00",ProviderEarning:"$11179.99"},
    {id:2,name:"Provider Demo",totalearning:"$32886.96",myearning:"$1700.00",ProviderEarning:"$11179.99"},
    {id:3,name:"Provider Demo",totalearning:"$32886.96",myearning:"$1700.00",ProviderEarning:"$11179.99"},
  ]
  const [ModalVisible,setModalVisible] = useState(false)

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
                  <Text style={styles.heading}>Earning</Text>
              </View>
          </View>
          <ScrollView style={{backgroundColor:"#FFF"}}>
            {data.map(item=>{
              return(
                <View style={styles.cardcontainer} key={item.id}>
                  <View style={styles.aligner}>
                    <FontAwesome name="user-o" size={20} color="#f1b407"/>
                    <View style={{width:"70%"}}>
                      <Text style={styles.namehead}>Provider Name</Text>
                      <Text style={styles.nametxt}>{item.name}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>setModalVisible(true)}>
                      <Feather name="info" size={20} color="#f1b407" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.aligner}>
                    <Ionicons name="wallet-outline" size={20} color="#f1b407" />
                    <View style={{width:"85%"}}>
                      <Text style={styles.namehead}>Total Earning</Text>
                      <Text style={styles.nametxt}>{item.totalearning}</Text>
                    </View>
                  </View>
                  <View style={styles.aligner}>
                    <Ionicons name="wallet-outline" size={20} color="#f1b407" />
                    <View style={{width:"85%"}}>
                      <Text style={styles.namehead}>My Earning</Text>
                      <Text style={styles.nametxt}>{item.myearning}</Text>
                    </View>
                  </View>
                  <View style={styles.aligner}>
                    <Ionicons name="wallet-outline" size={20} color="#f1b407" />
                    <View style={{width:"85%"}}>
                      <Text style={styles.namehead}>Proider Earning</Text>
                      <Text style={styles.nametxt}>{item.ProviderEarning}</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.save}>
                      <Text style={styles.savetxt}>Payout</Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
          <Modal
            isVisible={ModalVisible}
            style={styles.modal}
            // onBackButtonPress={() => setModalVisible(false)}
            // onBackdropPress={() => setModalVisible(false)}
            onSwipeComplete={() => setModalVisible(false)}
            onSwipeThreshold={20}
            swipeDirection={['down']}
            scrollTo={this.handleScrollTo}
            scrollOffset={0}
            scrollOffsetMax={400 - 300} // content height - ScrollView height
            propagateSwipe={true}
        >
            <View style={styles.scrollableModal}>
                <View style={styles.modalContent}>
                  <Text style={[styles.heading,{marginLeft:0,marginVertical:10,fontSize:20}]}>Earning Details</Text>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Admin Earning</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>$1700.00</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Provider Name</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>Provider Demo</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Commision</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>$20.00</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Total Booking</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>85</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Total Earning</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>$32886.96</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Taxes</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>$249.90</Text>
                  </View>
                  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:5}}>
                    <Text style={[styles.namehead,{fontSize:15}]}>Provider Earning</Text>
                    <Text style={[styles.nametxt,{fontSize:15,fontWeight:"700"}]}>$1700.00</Text>
                  </View>
                </View>
            </View>
        </Modal>
    </>
        
  
  )
}

export default Earning

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
  save:{
    backgroundColor:"#f1b407",
    justifyContent:'center',
    alignItems:"center",
    paddingVertical:15,
    borderRadius:10,
    marginBottom:20
  },
  savetxt:{
    fontSize:15,
    color:"#000",
    fontWeight:"700"
  },
  cardcontainer:{
    backgroundColor:"#f5f7f9",
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:10,
    padding:20,
  },
  aligner:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    borderBottomWidth:1,
    paddingVertical:10,
    borderColor:"#eef0f2"
  },
  namehead:{
    fontSize:13,
    color:"#a6a6a9",
    fontWeight:"500",
    paddingBottom:5
  },
  nametxt:{
    fontSize:15,
    color:"#000",
    fontWeight:"500"
  },
  scrollableModal: {
    height: 400,
    backgroundColor:"#f5f7f9",
    padding:10,
    paddingVertical:20
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent:{
    backgroundColor:"#FFF",
    borderRadius:10,
    padding:20
  }
})