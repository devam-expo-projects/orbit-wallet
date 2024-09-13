import { border, flex } from "@/constants/Style";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { FlatList, Image, Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const IMAGE_URL = "https://picsum.photos/";
const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 78 : 78; // Adjust for platform

const HomeScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const screenHeight = Dimensions.get("window").height;
  const androidHeight = screenHeight;
  const iOSHeight = screenHeight - TAB_BAR_HEIGHT;

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls = Array.from(
        { length: 10 },
        (_, index) => `${IMAGE_URL}800?random=${index}`
      );
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  const IconMenu = () => {
    return (
      <View style={styles.iconContainer}>
        <AntDesign name="adduser" size={32} color={Colors.light.white} />
        <Ionicons
          name="chatbubbles-outline"
          size={32}
          color={Colors.light.white}
        />
        <FontAwesome name="heart-o" size={32} color={Colors.light.white} />
        <FontAwesome name="share" size={32} color={Colors.light.white} />
        <Feather name="send" size={32} color={Colors.light.white} />
      </View>
    );
  };

  const renderImageItem = ({ item }: { item: string }) => (
    <View
      style={[
        styles.imageContainer,
        { height: Platform.OS === "android" ? androidHeight : iOSHeight },
      ]}
    >
      <Image source={{ uri: item }} style={styles.image} />
      <View style={styles.textContainer}>
        <IconMenu></IconMenu>
        <Text style={styles.topText}>Caption</Text>
        <Text style={styles.bottomText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor empor.
        </Text>
        <Text style={styles.bottomText}>#lorem #ipsum #dolor #lorem</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderImageItem}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={Platform.OS === "android" ? androidHeight : iOSHeight}
      snapToAlignment="start"
      viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get("window").width,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconContainer: {
    ...flex({ dir: "column" }),
    rowGap: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    width: "100%",
    rowGap: 6,
    bottom: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  topText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
  },
  bottomText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10,
  },
});

export default HomeScreen;
