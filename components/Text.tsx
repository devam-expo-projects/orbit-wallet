import { flex } from "@/constants/Style";
import { Text, View } from "react-native";

export const FirstCardText = ({ text }: { text: string }) => {
  return (
    <Text style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{text}</Text>
  );
};

export const SecondCardText = ({ text }: { text: string[] }) => {
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
