import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { flex } from "@/constants/Style";
import { hashtagArray, topCommunity } from "@/constants/MockData";
import HeadingPicture from "@/components/HeadingPicture";
import ProfileList from "@/components/ProfileList";
import ListHeading from "@/components/ListHeading";
import PlaceCard from "@/components/PlaceCard";
import SearchHeader from "@/components/SearchHeader";
import ListItems from "@/components/ListItems";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <SearchHeader />
        <HeadingPicture />
        <ListItems
          label={"Trending hashtags"}
          textArray={hashtagArray}
          firstCard={true}
        ></ListItems>
        <ListItems
          label={"Top community"}
          startIndex={50}
          textArray={topCommunity}
          firstCard={false}
        />
        <ProfileList label={"Top nomads"}></ProfileList>
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
