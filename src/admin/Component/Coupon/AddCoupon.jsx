import { Dimensions, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker'

const AddCoupon = () => {

    const [selected, setSelected] = useState('Company');  // Default to 'All'
    const [isSelected, setIsSelection] = useState(false);
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  console.log(date)

  return (
    <>
        <View style={styles.head}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={27} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.heading}>Add Coupon</Text>
            </View>
        </View>
        <View style={{backgroundColor:"#FFF",height:Dimensions.get("window").height}}>
            <View style={styles.bgContainer}>
                    <TextInput style={[styles.input,{marginBottom:15}]} placeholder='Coupon Code' />
                    <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Type</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <View style={[styles.input,{paddingHorizontal:0,width:"47%"}]}>
                            <Picker
                                style={styles.picker}
                                selectedValue={selected}
                                onValueChange={(itemValue) => setSelected(itemValue)}
                            >
                                <Picker.Item label="Fixed" value="" />
                                <Picker.Item label="Option 2" value="Option 2" />
                                <Picker.Item label="Option 3" value="Option 3" />
                            </Picker>
                        </View>
                        <View style={{width:"47%"}} >
                            <Text style={{color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10,marginTop:-10}}>Discount</Text>
                                <TextInput style={[styles.input]}  value='0' />
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.input,{marginTop:20,flexDirection:"row",alignItems:"center",gap:10}]} onPress={() => setOpen(true)}>
                        <EvilIcons name="calendar" size={15}/>
                        <Text style={{paddingVertical:20,fontSize:15,color:"#000",fontWeight:"400"}}>{date.toString()}</Text>
                        {/* <Text>{date}</Text> */}
                    </TouchableOpacity>
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode="date"
                        onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        }}
                        onCancel={() => {
                        setOpen(false)
                        }}
                    />
                    <Text style={{marginTop:10,color:"grey",marginBottom:-10, zIndex:999,paddingLeft:10}}>Select Status</Text>
                    <View style={[styles.input,{paddingHorizontal:0}]}>
                        <Picker
                            style={styles.picker}
                            selectedValue={isSelected}
                            onValueChange={(itemValue) => setIsSelection(itemValue)}
                        >
                            <Picker.Item label="Active" value="" />
                            <Picker.Item label="Option 2" value="Option 2" />
                            <Picker.Item label="Option 3" value="Option 3" />
                        </Picker>
                    </View>
                    <Text style={{marginTop:20,color:"grey",fontSize:15,fontWeight:"600"}}>Pick a Service</Text>
                    <TextInput style={[styles.input,{marginTop:20}]} placeholder='Description' multiline={true} numberOfLines={4} />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt}>Save</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </>
  )
}

export default AddCoupon

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
    bgContainer:{
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginTop:10
    },
    input:{
        backgroundColor:"#f4f7f9",
        paddingHorizontal:10,
        color:"grey",
        fontWeight:"500",
        borderRadius:10,
    },
    btn:{
        backgroundColor:"#f1b407",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:15,
        marginTop:20,
        borderRadius:10,
        marginBottom:30
    },
    btntxt:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"600"
    },
})