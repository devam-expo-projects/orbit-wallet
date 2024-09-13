// src/screens/SearchScreen.tsx
import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import TrendingHashtags from "@/components/TrendingHashtags";
import TopCommunity from "@/components/TopCommunity";
import { mockHashtags, mockCommunities } from "@/constants/MockData";

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Trending Hashtags Section */}
      <TrendingHashtags hashtags={mockHashtags} />

      {/* Top Community Section */}
      <TopCommunity communities={mockCommunities} />

      {/* Additional Content */}
      <View style={styles.content}>
        <Text>Other content goes here...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
});
