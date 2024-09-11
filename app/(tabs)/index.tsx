import { Image, StyleSheet, Platform, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderStyle:'solid',
        borderColor:'red',
        borderWidth:1

      }}
    >
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
