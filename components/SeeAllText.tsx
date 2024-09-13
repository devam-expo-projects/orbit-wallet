import React from "react";
import { Text, StyleSheet } from "react-native";

const SeeAllText = ({ text, style }: { text: string; style?: any }) => {
  return <Text style={{ ...styles.text, ...style }}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5b7a7f",
  },
});

export default SeeAllText;
