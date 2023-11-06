import { StyleSheet, Text, View, ScrollView, TextInput, Pressable } from "react-native";
import React from "react";

const AddressScreen = () => {
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ height: 50, backgroundColor: "#00CED1" }} />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a new Address
        </Text>
        <TextInput
          placeholderTextColor="black"
          placeholder="India"
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
        <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>
                Full Name (First and Last Name)
            </Text>
            <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder="Enter your name"/>
        </View>
        <View>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>Monile number</Text>
            <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder="Mobile No"/>
        </View>
        <View style={{marginVertical:10}}>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>Flat, House No, Building, Company</Text>
            <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder=""/>
        </View>
        <View>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>Area, Street, Sector, Village</Text>
            <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder=""/>
        </View>
        <View style={{marginVertical:10}}>
            <Text style={{fontSize: 15, fontWeight:"bold"}}>Landmark</Text>
            <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder="Eg. Hydel Colony, DLW"/>
        </View>
        <View style={{marginVertical:10}}>
          <Text style={{fontSize: 15, fontWeight:"bold"}}>Pincode</Text>
          <TextInput placeholderTextColor="black" style={{padding:10, borderColor:"#D0D0D0", borderWidth: 1, marginTop:10, borderRadius: 5}} placeholder="Enter pincode"/>
        </View>
        <Pressable style={{backgroundColor:"#FFC72C", padding:19, borderRadius: 6, justifyContent:"center", alignItems:"center", marginTop:20}}>
            <Text style={{fontWeight:"bold"}}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
