import React, { useRef, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { border, flex } from "@/constants/Style";
import { hashtagArray, topCommunity } from "@/constants/MockData";

const HeadingText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <Text
      style={{ fontSize: 22, fontWeight: "800", color: "#5b7a7f", ...style }}
    >
      {text}
    </Text>
  );
};

const SeeAllText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <Text
      style={{ fontSize: 16, fontWeight: "500", color: "#5b7a7f", ...style }}
    >
      {text}
    </Text>
  );
};

const SearchHeader = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  return (
    <View style={styles.searchHeader}>
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

const HeadingPicture = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 16 }}>
      <Image
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        style={{
          height: screenHeight / 6,
          width: "100%",
          resizeMode: "cover",
          borderRadius: 12,
        }}
      />
      <Text
        style={{
          fontSize: 15,
          color: "#fff",
          position: "absolute",
          bottom: 12,
          left: 12,
          fontWeight: "700",
        }}
      >
        #Top search of the day
      </Text>
    </TouchableOpacity>
  );
};

const FirstCardText = ({ text }: { text: string }) => {
  return (
    <Text style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{text}</Text>
  );
};

const SecondCardText = ({ text }: { text: string[] }) => {
  const array = text[0];
  const first =
    array[0]?.length > 15 ? array[0].slice(0, 15) + "..." : array[0];
  const second = array[1]?.length ? array[1].slice(0, 15) + "..." : array[1];

  return (
    <View
      style={{
        ...flex({ dir: "column", justify: "flex-start", align: "flex-start" }),
      }}
    >
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "200" }}>
        {first}
      </Text>
      <Text style={{ color: "#fff", fontSize: 22, fontWeight: "800" }}>
        {second}
      </Text>
    </View>
  );
};

const PlaceCard = ({ index, children }: { index: number; children?: any }) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <TouchableOpacity
      style={{ ...flex(), marginRight: 10, overflow: "scroll" }}
    >
      <Image
        source={{
          uri: `https://picsum.photos/id/${index + 10}/400/100`,
        }}
        style={{
          height: screenHeight / 8,
          width: screenWidth / 2.3,
          borderRadius: 6,
          resizeMode: "cover",
        }}
      />
      <View style={{ position: "absolute", bottom: 10, left: 15 }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const ProfileCard = ({
  index,
  name,
  follwers,
}: {
  index: number;
  name: string;
  follwers: string;
}) => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  return (
    <TouchableOpacity
      style={{
        ...flex({ justify: "center", dir: "column" }),
        overflow: "scroll",
        marginRight: 16,
      }}
    >
      <Image
        source={{
          uri: `https://xsgames.co/randomusers/assets/avatars/female/${index}.jpg`,
        }}
        style={{
          height: screenHeight / 8,
          width: screenWidth / 3 - 25,
          borderRadius: (screenWidth / 3 - 25) / 2,
          resizeMode: "cover",
          marginBottom: 6,
        }}
      />
      <View style={{}}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "700",
            color: "#5b7a7f",
            textAlign: "center",
          }}
        >
          {`@${name}`}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "400",
            color: "#5b7a7f",
            textAlign: "center",
          }}
        >
          {follwers}k Followers
        </Text>
      </View>
    </TouchableOpacity>
  );
};

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

const ListItems = ({
  label,
  style,
  startIndex = 0,
  textArray,
  firstCard,
}: {
  label: string;
  style?: any;
  startIndex?: number;
  textArray: string[] | any;
  firstCard: boolean;
}) => {
  const imageText = textArray?.map((item: string) => {
    return item?.length > 15 ? item.slice(0, 15) + "..." : item;
  });

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
          data={[...new Array(10)]}
          horizontal
          renderItem={({ item, index }) => {
            return (
              <PlaceCard index={index + startIndex} key={index}>
                {firstCard ? (
                  <FirstCardText text={imageText?.[index] || ""} />
                ) : (
                  <SecondCardText
                    text={[textArray?.[index]] || ""}
                  ></SecondCardText>
                )}
              </PlaceCard>
            );
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

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
  searchHeader: {
    margin: 16,
  },
});
