import React from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { hashtagArray, topCommunity } from "@/constants/MockData";
import HeadingPicture from "@/components/HeadingPicture";
import ProfileList from "@/components/ProfileList";
import SearchHeader from "@/components/SearchHeader";
import ListItems from "@/components/ListItems";
import { border } from "@/constants/Style";

export default function SearchScreen() {
  // Get the status bar height only if the platform is Android
  const statusBarHeight =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"dark-content"}></StatusBar>
      <ScrollView style={[styles.container, { marginTop: statusBarHeight }]}>
        <SearchHeader />
        <HeadingPicture />
        <ListItems
          label={"Trending hashtags"}
          textArray={hashtagArray}
          firstCard={true}
        />
        <ListItems
          label={"Top community"}
          startIndex={50}
          textArray={topCommunity}
          firstCard={false}
        />
        <ProfileList label={"Top nomads"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f6",
  },
});
