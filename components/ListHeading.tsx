import { flex } from "@/constants/Style";
import { TouchableOpacity, View } from "react-native";
import HeadingText from "./HeadingText";
import SeeAllText from "./SeeAllText";

const ListHeading = ({ label }: { label: string }) => {
    return (
      <View
        style={{
          ...flex({ dir: "row", justify: "space-between" }),
          marginRight: 20,
        }}
      >
        <HeadingText text={label}></HeadingText>
        <TouchableOpacity>
          <SeeAllText text="See all"></SeeAllText>
        </TouchableOpacity>
      </View>
    );
  };

  export default ListHeading;