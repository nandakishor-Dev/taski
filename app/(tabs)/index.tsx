import BottomBar from "@/components/BottomBar";
import { Redirect, router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    // <Redirect href="/login" />
    <SafeAreaView>
      <View style={{ height: "92%" }}>
 
      </View>
      <View style={{ height: "8%" }}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}
