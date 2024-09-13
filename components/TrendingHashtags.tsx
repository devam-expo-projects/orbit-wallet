// src/components/TrendingHashtags.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const TrendingHashtags = ({ hashtags }: { hashtags: string[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Hashtags</Text>
      <FlatList
        data={hashtags}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.hashtag}>
            <Text style={styles.hashtagText}>{item}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  hashtag: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  hashtagText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TrendingHashtags;
