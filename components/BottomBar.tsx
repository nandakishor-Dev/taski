import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <AntDesign onPress={()=>{}} name="home" size={24} color="#0284c7" />
      <AntDesign onPress={()=>{}}  name="home" size={24} color="#0284c7" />
      <AntDesign onPress={()=>{}} name="search1" size={24} color="#0284c7" />
      <AntDesign onPress={()=>{}} name="setting" size={24} color="#0284c7" />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f1f5f9",
  },
});
