import React from 'react'
import { StyleSheet, Text, ScrollView, Pressable, View, TextInput, ImageBackground, Dimensions } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const ProductInfoScreen = () => {
  const route = useRoute();
  const {width} = Dimensions.get("window");
  const height = (width * 100) / 100;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 45,backgroundColor:"white"}}>
      <View
          style={{
            backgroundColor: "#00CED1",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,
              flex: 1,
            }}
          >
            <AntDesign
              name="search1"
              size={22}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <TextInput placeholder="Search" />
          </Pressable>
          <Entypo name="mic" size={24} color="black" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {route.params.carouselImages.map((item, index) => (
              <ImageBackground style={{width, height, marginTop: 25, resizeMode: "contain"}} source={{uri: item}} key={index}>
                  <View style={{padding: 20, flexDirection: "row", justifyContent:"space-between"}}>
                      <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor: "#C60C30", flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                         <Text style={{textAlign:"center", color:"white", fontWeight:"600", fontSize: 12}}>20% off</Text>
                      </View>
                      <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor: "#E0E0E0", flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
                         <MaterialCommunityIcons name="share-variant" size={24} color="black" />
                      </View>
                  </View>
                  <View style={{width: 40, height: 40, borderRadius: 20, backgroundColor:"#E0E0E0", justifyContent:"center", alignItems:"center", flexDirection:"row", marginTop:"auto", marginLeft:20,  marginBottom: 20}}>
                      <AntDesign name="hearto" size={24} color="black" />
                  </View>
              </ImageBackground>
            ))}
      </ScrollView>
      <View style={{padding:10}}>
          <Text style={{fontSize: 15, fontWeight: "500"}}>
            {route?.params?.title}
          </Text>
          <Text style={{fontSize: 18, fontWeight:"800", marginTop:6}}>
            {route?.params?.price} $
          </Text>
      </View>
      <Text style={{height: 1, borderColor:"#D0D0D0", borderWidth:1}}/>
      <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
          <Text>Color: </Text>
          <Text style={{fontSize: 15,  fontWeight:"bold"}}>{route?.params?.color}</Text>
      </View>
      <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
          <Text>Size: </Text>
          <Text style={{fontSize: 15,  fontWeight:"bold"}}>{route?.params?.size}</Text>
      </View>
      <Text style={{height: 1, borderColor:"#D0D0D0", borderWidth:1}}/>
      <View style={{padding: 10}}>
              <Text style={{fontSize: 15, fontWeight: "bold", marginVertical: 5}}>Total: {route.params.price} $</Text>
              <Text style={{color:"#00CED1"}}>FREE delivery tomorow by 3 PM. Order within 10hrs 30 mins</Text>
              <View style={{flexDirection:"row", marginVertical:5, alignItems:"center", gap: 5}}>
                  <Ionicons name="location" size={24} color="black" />
                  <Text style={{fontSize: 15, fontWeight: "500"}}>Deliver To Gyanendra - Varanasi, 221204</Text>
              </View>
      </View>
      <Text style={{color:"green", marginHorizontal:10, fontWeight:"500"}}>
        In Stock
      </Text>
      <Pressable style={{backgroundColor:"#FFC72C", padding: 10, borderRadius: 20, justifyContent:"center", alignItems:"center", marginHorizontal: 10, marginVertical: 10}}>
        <Text>Add to Cart</Text>
      </Pressable>
      <Pressable style={{backgroundColor:"#FFEC1C", padding: 10, borderRadius: 20, justifyContent:"center", alignItems:"center", marginHorizontal: 10, marginVertical: 10}}>
        <Text>Buy Now</Text>
      </Pressable>
    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})