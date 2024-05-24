import React, { useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, router } from "expo-router";
import axios from "axios";
import TextField from "../components/TextField";

export default function Login() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name:string, text:string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: text,
    }));
  };
  console.log(formData);
  const handleSubmit = async () => {
    router.push("/tabs/index");
    console.log("fn running");
    try {
      const response = await axios.post(
        "http://192.168.1.6:3000/user/login",
        formData
      );
      console.log("response =>>", response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 30, paddingLeft: 30, paddingTop: 10 }}>
            Sign In
          </Text>
          <Text style={{ fontSize: 14, paddingLeft: 30 }}>
            Sign in to your account
          </Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextField
            onChangeText={(text) => handleInputChange("email", text)}
            placeholder="Email"
          />
          <TextField
            onChangeText={(text) => handleInputChange("password", text)}
            placeholder="Password"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Link */}
          <Link href="/welcome" asChild>
            <Pressable style={styles.pressable}>
              <Button onPress={handleSubmit} color="#CD5C5C" title="login" />
            </Pressable>
          </Link>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              marginTop: 100,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Dont have an account? </Text>
            <Text style={{ color: "#CD5C5C" }}>Signup</Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBorder: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 10,
  },

  pressable: {
    width: "85%",
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 50,
    overflow: "hidden",
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    display: "flex",
    gap: 35,
  },
});