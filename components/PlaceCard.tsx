import React from "react";
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";

const PlaceCard = ({ index, children }: { index: number; children?: any }) => {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={{ uri: `https://picsum.photos/id/${index + 10}/400/100` }}
        style={{ ...styles.image, width: width / 2.5, height: height / 8 }}
      />
      <View style={styles.textContainer}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 10,
  },
  image: {
    borderRadius: 6,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 15,
  },
});

export default PlaceCard;
