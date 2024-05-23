import BottomBar from "@/components/BottomBar";
import { router } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={()=>router.push('/login')} style={{ height: "92%" }}>
        <Text>
          hjhjh
        </Text>
      </TouchableOpacity>
      <View style={{ height: "8%" }}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}
