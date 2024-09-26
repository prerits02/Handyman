import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


const CustomDrawerContent = () => {
  const jumpToAction = DrawerActions.jumpTo('Booking');
  const jumpToDash = DrawerActions.jumpTo('Dashboard');
  const navigation = useNavigation()
  // State to track the selected item and expanded category
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Function to handle item click
  const handleItemClick = (item) => {
    if (expandedCategory === item) {
      // Collapse the currently expanded category
      setExpandedCategory(null);
    } else {
      // Expand the clicked category
      setExpandedCategory(item);
    }
    if(item == "Booking"){
      navigation.navigate("Booking");
    }
    else if(item == "Dashboard"){
      navigation.dispatch(jumpToDash);
    }
    else if(item == "Users"){
      navigation.navigate("Users");
    }
    else if(item == "Payment"){
      navigation.navigate("Payments");
    }
    else if(item == "Packages"){
      navigation.navigate("Packages");
    }
    else if(item == "Earning"){
      navigation.navigate("Earning");
    }
    else if(item == "About App"){
      navigation.navigate("AboutApp");
    }
  };

  // Function to determine the background color of each item
  const getItemStyle = (item) => ({
    backgroundColor: expandedCategory === item ? "#fcfcc5" : "#FFF", // Change color if expanded
  });

  // Function to render options based on category
  const renderCategoryOptions = (category) => {
    if (expandedCategory === category) {
      switch (category) {
        case 'Category':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("CategoryList")}>
                <Text style={styles.optionstxt}>Category List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddCategory")}>
                <Text style={styles.optionstxt}>Add Category</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Service':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AllService")}>
                <Text style={styles.optionstxt}>Service List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddService")}>
                <Text style={styles.optionstxt}>Add Service</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Provider':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("ProviderList")}>
                <Text style={styles.optionstxt}>Provider List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddProvider")}>
                <Text style={styles.optionstxt}>Add Provider</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("PendingProvider")}>
                <Text style={styles.optionstxt}>Pending Provider</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("ProviderType")}>
                <Text style={styles.optionstxt}>Provider Type List</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Handyman':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("HandymanList")}>
                <Text style={styles.optionstxt}>Handyman List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddHandyman")}>
                <Text style={styles.optionstxt}>Add Handyman</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("PendingHandyman")}>
                <Text style={styles.optionstxt}>Pending Handyman</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("HandymanTypeList")}>
                <Text style={styles.optionstxt}>Handyman Type List</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Document':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("DocumentList")}>
                <Text style={styles.optionstxt}>Document List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddDocument")}>
                <Text style={styles.optionstxt}>Add Document</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Coupon':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("CouponList")}>
                <Text style={styles.optionstxt}>Coupon List</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AddCoupon")}>
                <Text style={styles.optionstxt}>Add Coupon</Text>
              </TouchableOpacity>
            </View>
          );
        case 'Settings':
          return (
            <View>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("PushNotification")}>
                <Text style={styles.optionstxt}>Push Notifications Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.drawerlist} onPress={()=>navigation.navigate("AppSettings")}>
                <Text style={styles.optionstxt}>App Settings</Text>
              </TouchableOpacity>
            </View>
          );
        default:
          return null;
      }
    }
    return null; // Do not render options if the category is not expanded
  };

  // Function to determine the chevron icon for each item
  const getChevronIcon = (item) => {
    return expandedCategory === item ? 'chevron-up' : 'chevron-down';
  };

  return (
    <>
        <View style={{ backgroundColor: '#f1b407', paddingVertical: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10, gap: 10 }}>
            <View style={styles.profilebrdr}>
                <Image style={styles.profileimg} source={require("../../../assets/images/wokerimgexample.jpg")} />
            </View>
            <View>
                <Text style={styles.name}>Admin</Text>
                <Text style={styles.email}>admin@admin.com</Text>
            </View>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Dashboard')}>
                <Text style={styles.listtext}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Category')}>
                <Text style={styles.listtext}>Category</Text>
                <Entypo name={getChevronIcon('Category')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Category')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Service')}>
                <Text style={styles.listtext}>Service</Text>
                <Entypo name={getChevronIcon('Service')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Service')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Provider')}>
                <Text style={styles.listtext}>Provider</Text>
                <Entypo name={getChevronIcon('Provider')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Provider')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Booking')}>
                <Text style={styles.listtext}>Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Handyman')}>
                <Text style={styles.listtext}>Handyman</Text>
                <Entypo name={getChevronIcon('Handyman')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Handyman')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Users')}>
                <Text style={styles.listtext}>Users</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Payment')}>
                <Text style={styles.listtext}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Packages')}>
                <Text style={styles.listtext}>Packages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Document')}>
                <Text style={styles.listtext}>Document</Text>
                <Entypo name={getChevronIcon('Document')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Document')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Coupon')}>
                <Text style={styles.listtext}>Coupon</Text>
                <Entypo name={getChevronIcon('Coupon')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Coupon')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Earning')}>
                <Text style={styles.listtext}>Earning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Settings')}>
                <Text style={styles.listtext}>Settings</Text>
                <Entypo name={getChevronIcon('Settings')} size={20} color="#000" />
            </TouchableOpacity>
            {renderCategoryOptions('Settings')}
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('About App')}>
                <Text style={styles.listtext}>About App</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Rate US')}>
                <Text style={styles.listtext}>Rate US</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drawerlist]} onPress={() => handleItemClick('Share App')}>
                <Text style={styles.listtext}>Share App</Text>
            </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity style={[styles.drawerlist, { justifyContent: "center", alignItems: "center" }]} onPress={()=>navigation.navigate("Signin")}>
            <Text style={styles.listtext}>Logout</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center",marginBottom:20}}>v1.0</Text>
    </>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  profileimg: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  profilebrdr: {
    borderWidth: 2,
    borderColor: "#FFF",
    borderRadius: 100
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000"
  },
  email: {
    color: "#000"
  },
  drawerlist: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },
  listtext: {
    fontSize: 15,
    color: "#000",
    fontWeight: "500"
  },
  optionstxt:{
    fontSize: 15,
    color: "#000",
    paddingLeft:10
  }
});
