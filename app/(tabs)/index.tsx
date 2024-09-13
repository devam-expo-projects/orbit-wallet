import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Platform,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

const IMAGE_URL = "https://picsum.photos/";
const PAGE_SIZE = 10;
const TAB_BAR_HEIGHT = Platform.OS === "ios" ? 78 : 78;

const IconMenu = () => (
  <View style={styles.iconContainer}>
    <AntDesign name="adduser" size={32} color={Colors.light.white} />
    <Ionicons name="chatbubbles-outline" size={32} color={Colors.light.white} />
    <FontAwesome name="heart-o" size={32} color={Colors.light.white} />
    <FontAwesome name="share" size={32} color={Colors.light.white} />
    <Feather name="send" size={32} color={Colors.light.white} />
  </View>
);

const ImageItem = ({ item, height }: { item: string; height: number }) => (
  <View style={[styles.imageContainer, { height }]}>
    <Image source={{ uri: item }} style={styles.image} />
    <View style={styles.textContainer}>
      <IconMenu />
      <Text style={styles.topText}>Caption</Text>
      <Text style={styles.bottomText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Text style={styles.bottomText}>#lorem #ipsum #dolor #lorem</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const screenHeight = Dimensions.get("window").height;
  const androidHeight = screenHeight;
  const iOSHeight = screenHeight - TAB_BAR_HEIGHT;
  const currentHeight = Platform.OS === "android" ? androidHeight : iOSHeight;

  const fetchImages = async (page: number) => {
    const newImageUrls = Array.from(
      { length: PAGE_SIZE },
      (_, index) => `${IMAGE_URL}800?random=${index + page * PAGE_SIZE}`
    );
    setImages((prevImages) => [...prevImages, ...newImageUrls]);
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <ImageItem item={item} height={currentHeight} />
      )}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={currentHeight}
      snapToAlignment="start"
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
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
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    rowGap: 20,
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
