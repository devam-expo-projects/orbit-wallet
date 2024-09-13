// src/components/TopCommunity.tsx
import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const TopCommunity = ({ communities }: { communities: Array<{ id: string, name: string, image: string }> }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Communities</Text>
      <FlatList
        data={communities}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.community}>
            <Image source={{ uri: item.image }} style={styles.communityImage} />
            <Text style={styles.communityName}>{item.name}</Text>
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
  community: {
    alignItems: "center",
    marginRight: 10,
  },
  communityImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  communityName: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default TopCommunity;
