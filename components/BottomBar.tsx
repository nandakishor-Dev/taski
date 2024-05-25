import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
interface BottomBarProps {
  onPress: (screen: string) => void;
  currentScreen: string;
}
const BottomBar: React.FC<BottomBarProps> = ({ onPress, currentScreen }) => {
  const handleLine = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: -15,
          backgroundColor: "#CD5C5C",
          height: 4,
          width: "100%",
          borderRadius: 5,
        }}
      ></View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={{ alignItems: "center" }}>
        <Ionicons
          onPress={() => {}}
          style={styles.add}
          name="add-circle"
          size={66}
          color="#CD5C5C"
        />
      </TouchableHighlight>

      <View style={styles.lo}>
        <View>
          <AntDesign
            onPress={() => {
              onPress("home");
            }}
            name="home"
            size={24}
            color="#CD5C5C"
          />
          {currentScreen === "home" && handleLine()}
        </View>
        <View>
          <FontAwesome5
            onPress={() => onPress("tasklist")}
            name="tasks"
            size={24}
            color="#CD5C5C"
          />
          {currentScreen === "tasklist" && handleLine()}
        </View>
        <View>
          <AntDesign
            onPress={() => onPress("calender")}
            name="calendar"
            size={24}
            color="#CD5C5C"
          />
          {currentScreen === "calender" && handleLine()}
        </View>

        <View>
          <AntDesign
            onPress={() => {
              onPress("settings");
            }}
            name="setting"
            size={24}
            color="#CD5C5C"
          />
          {currentScreen === "settings" && handleLine()}
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafaf9",
  },
  lo: {
    paddingTop: 24,
    // borderWidth:1,
    // borderColor:"red",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  add: {
    top: -25,
    position: "absolute",
  },
});
