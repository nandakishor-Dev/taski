import BottomBar from "@/components/BottomBar";
import { Redirect, router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    // <Redirect href="/login" />
    <SafeAreaView>
      <View style={{ height: "89%" }}>
 
      </View>
      <View style={{ height: "11%" }}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}
