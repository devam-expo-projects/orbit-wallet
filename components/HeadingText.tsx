import React from "react";
import { Text, StyleSheet } from "react-native";

const HeadingText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <Text style={{ ...styles.text, ...style }}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "800",
    color: "#5b7a7f",
  },
});

export default HeadingText;
