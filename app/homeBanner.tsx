import React from "react";
// import {welcomeImage} from "../assets/images/welcome";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Link, router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 100, alignItems: "center" }}>
        <Text style={{ fontSize: 28, color: "#CD5C5C" }}>
          Your tasks, your plan
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={require('../assets/images/welcome.png')} style={{ height: 270 }} />
      </View>
      <View
        style={{
          justifyContent: "space-around",
          gap: 30,
          display: "flex",
          alignItems: "center",
          paddingBottom: 90,
        }}
      >
        <Pressable
          style={{
            width: "80%",
            backgroundColor: "red",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Button
            onPress={() => router.push("/login")}
            color="#CD5C5C"
            title="Sign in"
          />
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>Dont have an account? </Text>
          <Pressable onPress={() => router.push("/register")}>
            <Text style={{ color: "#CD5C5C" }}>Signup</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },
});