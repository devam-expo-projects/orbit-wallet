import { Text } from "react-native";

export const HeadingText = ({ text, style }: { text: string; style?: any }) => {
  return (
    <Text
      style={{ fontSize: 22, fontWeight: "800", color: "#5b7a7f", ...style }}
    >
      {text}
    </Text>
  );
};

export default HeadingText;
