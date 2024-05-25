import BottomBar from "@/components/BottomBar";
import { Redirect, router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Calender from "./calender";
import { useEffect, useState } from "react";
import Tasklist from "./tasklist";
import Settings from "./settings";
import Home from "./home";

export default function Index() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const handleScreenChange = (screen: string) => {
    setCurrentScreen(screen);
  };
  const currScreen = () => {
    switch (currentScreen) {
      case "tasklist":
        return <Tasklist />;
      case "calender":
        return <Calender />;
      case "settings":
        return <Settings />;
      case "home":
        return <Home />;
    }
  };

  return (
    // <Redirect href="/login" />
    <SafeAreaView>
      <View style={{ height: "89%" }}>{currScreen()}</View>
      <View style={{ height: "11%" }}>
        <BottomBar currentScreen={currentScreen} onPress={handleScreenChange} />
      </View>
    </SafeAreaView>
  );
}
