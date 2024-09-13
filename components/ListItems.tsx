import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import HeadingText from "./HeadingText";
import SeeAllText from "./SeeAllText";
import PlaceCard from "./PlaceCard";

const ListItems = ({
  label,
  startIndex = 0,
  textArray,
  firstCard,
}: {
  label: string;
  startIndex?: number;
  textArray: string[] | any;
  firstCard: boolean;
}) => {
  const imageText = textArray.map((item: string) =>
    item.length > 15 ? item.slice(0, 15) + "..." : item
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeadingText text={label} />
        <SeeAllText text="See all" />
      </View>
      <FlatList
        data={new Array(10)}
        horizontal
        renderItem={({ index }) => (
          <PlaceCard index={index + startIndex}>
            {firstCard ? (
              <Text style={styles.cardText}>{imageText[index] || ""}</Text>
            ) : (
              <View>
                <Text style={styles.cardTitle}>
                  {imageText[index]?.slice(0, 15)}
                </Text>
                <Text style={styles.cardSubtitle}>
                  {imageText[index + 1]?.slice(0, 15)}
                </Text>
              </View>
            )}
          </PlaceCard>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginBottom: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  cardTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "200",
  },
  cardSubtitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
  },
});

export default ListItems;
