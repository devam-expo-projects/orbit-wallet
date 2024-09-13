import { flex } from "@/constants/Style";
import { FlatList, View } from "react-native";
import ProfileCard from "./ProfileCard";
import ListHeading from "./ListHeading";

const ProfileList = ({
  label,
  style,
  startIndex = 0,
}: {
  label: string;
  style?: any;
  startIndex?: number;
}) => {
  return (
    <View
      style={{
        ...flex({ dir: "column", flex: 1 }),
        rowGap: 12,
        marginLeft: 20,
        marginBottom: 16,
        ...style,
      }}
    >
      <View style={{ ...flex({ dir: "row" }) }}>
        <ListHeading label={label}></ListHeading>
      </View>
      <View
        style={{
          ...flex({ dir: "row", justify: "space-between" }),
        }}
      >
        <FlatList
          data={[...new Array(3)]}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <ProfileCard
                index={index + startIndex}
                key={index}
                name={"playparker"}
                follwers={"234"}
              ></ProfileCard>
            );
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ProfileList;
