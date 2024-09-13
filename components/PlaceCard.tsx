import { flex } from "@/constants/Style";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";

const PlaceCard = ({ index, children }: { index: number; children?: any }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <TouchableOpacity
      style={{ ...flex(), marginRight: 10, overflow: "scroll" }}
    >
      <Image
        source={{
          uri: `https://picsum.photos/id/${index + 10}/400/100`,
        }}
        style={{
          height: screenHeight / 8,
          width: screenWidth / 2.3,
          borderRadius: 6,
          resizeMode: "cover",
        }}
      />
      <View style={{ position: "absolute", bottom: 10, left: 15 }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;
