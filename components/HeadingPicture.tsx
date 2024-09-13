import { Dimensions, Text } from "react-native";
import { Image, TouchableOpacity } from "react-native";

const HeadingPicture = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 16 }}>
      <Image
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        style={{
          height: screenHeight / 6,
          width: "100%",
          resizeMode: "cover",
          borderRadius: 12,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          color: "#fff",
          position: "absolute",
          bottom: 12,
          left: 12,
          fontWeight: "700",
        }}
      >
        #Top search of the day
      </Text>
    </TouchableOpacity>
  );
};

export default HeadingPicture;
