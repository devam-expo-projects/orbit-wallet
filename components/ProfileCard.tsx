import { flex } from "@/constants/Style";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const ProfileCard = ({
  index,
  name,
  follwers,
}: {
  index: number;
  name: string;
  follwers: string;
}) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <TouchableOpacity
      style={{
        ...flex({ justify: "center", dir: "column" }),
        overflow: "scroll",
        marginRight: 16,
      }}
    >
      <Image
        source={{
          uri: `https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`,
        }}
        style={{
          height: screenHeight / 8,
          width: screenWidth / 3 - 25,
          borderRadius: (screenWidth / 3 - 25) / 2,
          resizeMode: "cover",
          marginBottom: 6,
        }}
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            color: "#5b7a7f",
            textAlign: "center",
          }}
        >
          {`@${name}`}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            color: "#5b7a7f",
            textAlign: "center",
          }}
        >
          {follwers}k Followers
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
