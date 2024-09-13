import React, { useState } from "react";
import { View, Platform, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import HeadingText from "./HeadingText";

const SearchHeader = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <HeadingText text={"Discover the world"} style={{ marginBottom: 10 }} />
      <SearchBar
        placeholder="Type Here..."
        value={search}
        onChangeText={setSearch}
        platform={Platform.OS === "ios" ? "ios" : "android"}
        searchIcon={<AntDesign name="search1" size={20} color="black" />}
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
        showCancel={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  searchContainer: {
    padding: 0,
    backgroundColor: "#f0f2f6",
    margin: -5,
  },
  inputContainer: {
    backgroundColor: "white",
  },
});

export default SearchHeader;
