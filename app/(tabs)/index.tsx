import { border, flex } from "@/constants/Style";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...flex({ dir: "row" }),
  },
});
