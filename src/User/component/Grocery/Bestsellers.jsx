import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Bestsellers = () => {

    const [data,setData] = useState([
        {id:1,desc:"Milk, Curd & Paneer",img:[
            {imgid:1,res:require("../../../assets/images/products.png")},
            {imgid:2,res:require("../../../assets/images/products.png")},
            {imgid:3,res:require("../../../assets/images/products.png")},
            {imgid:4,res:require("../../../assets/images/products.png")}
        ]},
        {id:2,desc:"Vegetables",img:[
            {imgid:1,res:require("../../../assets/images/products.png")},
            {imgid:2,res:require("../../../assets/images/products.png")},
            {imgid:3,res:require("../../../assets/images/products.png")}
        ]},
        {id:3,desc:"Fruits",img:[
            {imgid:1,res:require("../../../assets/images/products.png")},
            {imgid:2,res:require("../../../assets/images/products.png")},
            {imgid:3,res:require("../../../assets/images/products.png")},
            {imgid:4,res:require("../../../assets/images/products.png")},
            {imgid:5,res:require("../../../assets/images/products.png")},
            {imgid:6,res:require("../../../assets/images/products.png")},
            {imgid:7,res:require("../../../assets/images/products.png")}
        ]},
        {id:4,desc:"Chips & Munchies",img:[
            {imgid:1,res:require("../../../assets/images/products.png")},
            {imgid:2,res:require("../../../assets/images/products.png")},
            {imgid:3,res:require("../../../assets/images/products.png")},
            {imgid:4,res:require("../../../assets/images/products.png")},
            {imgid:5,res:require("../../../assets/images/products.png")},
            {imgid:6,res:require("../../../assets/images/products.png")},
            {imgid:7,res:require("../../../assets/images/products.png")},
            {imgid:8,res:require("../../../assets/images/products.png")},
            {imgid:9,res:require("../../../assets/images/products.png")},
            {imgid:10,res:require("../../../assets/images/products.png")},
            {imgid:11,res:require("../../../assets/images/products.png")},
            {imgid:12,res:require("../../../assets/images/products.png")},
            {imgid:13,res:require("../../../assets/images/products.png")},
            {imgid:14,res:require("../../../assets/images/products.png")}
        ]},
    ])

  return (
    <View>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginHorizontal:10,marginVertical:10}}>
            <Text style={{color:"#3b3b3b",fontSize:17,fontWeight:"700"}}>Bestsellers</Text>
            <TouchableOpacity>
                <Text style={{color:"#3c6d26",fontWeight:"700"}}>see all</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
            {data.map(item=>{
                return(
                    <TouchableOpacity key={item.id} style={styles.productContainer}>
                        <View style={styles.imgContainer}>
                            {item.img.slice(0, item.img.length > 4 ? 3 : 4).map((images) => (
                                <Image key={images.imgid} style={styles.img} source={images.res} />
                            ))}
                            {item.img.length > 4 && (
                                <View style={styles.imgcount}>
                                <Text style={{color:"#71778e",fontWeight:"900"}}>+{item.img.length - 3}</Text>
                                </View>
                            )}
                        </View>
                        <View style={{height:65}}>
                            <Text style={styles.heading}>{item.desc}</Text>
                            <Text style={styles.count}>{item.img.length} Products</Text>
                        </View>
                        <TouchableOpacity style={styles.productsbtn}>
                            <Text style={styles.btntxt}>See all</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ImageBackground source={require("../../../assets/images/groceryad.png")} style={styles.grocerad} imageStyle={styles.gadimg}>
                <Text style={{color:"#171812",fontSize:25,fontWeight:"700",width:170}}>Sweet and frosty desserts</Text>
                <Text style={{color:"#3d2c11",fontWeight:"500",width:140,marginVertical:10}}>Escape into a world of frozen goodness</Text>
                <TouchableOpacity style={styles.adbutton}>
                    <Text style={{color:"#ededed",fontWeight:"500"}}>Shop now</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={require("../../../assets/images/groceryad.png")} style={styles.grocerad} imageStyle={styles.gadimg}>
                <Text style={{color:"#171812",fontSize:25,fontWeight:"700",width:170}}>Sweet and frosty desserts</Text>
                <Text style={{color:"#3d2c11",fontWeight:"500",width:140,marginVertical:10}}>Escape into a world of frozen goodness</Text>
                <TouchableOpacity style={styles.adbutton}>
                    <Text style={{color:"#ededed",fontWeight:"500"}}>Shop now</Text>
                </TouchableOpacity>
            </ImageBackground>
            <ImageBackground source={require("../../../assets/images/groceryad.png")} style={styles.grocerad} imageStyle={styles.gadimg}>
                <Text style={{color:"#171812",fontSize:25,fontWeight:"700",width:170}}>Sweet and frosty desserts</Text>
                <Text style={{color:"#3d2c11",fontWeight:"500",width:140,marginVertical:10}}>Escape into a world of frozen goodness</Text>
                <TouchableOpacity style={styles.adbutton}>
                    <Text style={{color:"#ededed",fontWeight:"500"}}>Shop now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    </View>
  )
}


export default Bestsellers

const styles = StyleSheet.create({
    productContainer:{
        marginHorizontal:10
    },
    productsbtn:{
        borderWidth:1,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:5,
        paddingVertical:5,
        borderColor:"#dfdee3",
        width:100,
        marginVertical:2
    },
    btntxt:{
        color:"#2f741b",
        fontWeight:"700"
    },
    heading:{
        color:"#343434",
        fontWeight:"500",
        marginVertical:2,
        width:100
    },
    count:{
        color:"grey",
        marginVertical:2
    },
    imgContainer:{
        backgroundColor:"#e5f3f3",
        borderRadius:5,
        flexDirection:"row",
        justifyContent:"space-between",
        flexDirection: "row", 
        flexWrap: "wrap", 
        width: 100, 
        justifyContent: "space-around",
        padding:2,
        paddingBottom:0
    },
    img:{
        width:44,
        height:44,
        borderRadius:5,
        marginBottom:4
    },
    imgcount:{
        width:44,
        height:44,
        backgroundColor:"#FFF",
        justifyContent:"center",
        alignItems:"center"
    },
    grocerad:{
        width:300,
        height:200,
        margin:10,
        padding:20,
        paddingTop:10,
        position:"relative"
    },
    gadimg:{
        borderRadius:10
    },
    adbutton:{
        position:"absolute",
        bottom:0,
        marginHorizontal:20,
        marginBottom:10,
        backgroundColor:"#1f1f1f",
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5
    }
})