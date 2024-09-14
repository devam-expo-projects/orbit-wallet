import { Platform, View } from "react-native";
import HeadingText from "./HeadingText";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={{ margin: 16 }}>
      <HeadingText text={"Discover the world"} style={{ marginBottom: 10 }} />
      <SearchBar
        placeholder="Type Here..."
        value={search}
        onChangeText={(text: any) => setSearch(text)}
        platform={Platform.OS === "ios" ? "ios" : "android"}
        searchIcon={<AntDesign name="search1" size={20} color="black" />}
        containerStyle={{ padding: 0, backgroundColor: "#f0f2f6", margin: -5 }}
        inputContainerStyle={{ backgroundColor: "white" }}
        showCancel={false}
        clearIcon={<></>}
        showLoading={false}
      />
    </View>
  );
};

export default SearchHeader;