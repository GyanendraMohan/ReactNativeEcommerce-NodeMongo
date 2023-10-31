import React from 'react'
import { StyleSheet, Text, ScrollView, Pressable, View, TextInput, ImageBackground, Dimensions } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
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
    </ScrollView>
  )
}

export default ProductInfoScreen

const styles = StyleSheet.create({})