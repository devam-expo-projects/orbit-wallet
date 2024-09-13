import { ViewStyle } from "react-native";

export const border = ({
  type = "solid",
  color = "red",
  width = 1,
  radius = 1,
}: {
  type?: "solid" | "dashed" | "dotted";
  color?: string;
  width?: number;
  radius?: number;
} = {}): ViewStyle => {
  return {
    borderColor: color,
    borderWidth: width,
    borderRadius: radius,
    borderStyle: type,
  };
};

export const flex = ({
  dir = "row",
  flex = 1,
  justify = "center",
  align = "center",
}: {
  dir?: "row" | "column";
  flex?: number;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end" | "stretch";
} = {}): ViewStyle => {
  return {
    flex,
    flexDirection: dir,
    justifyContent: justify,
    alignItems: align,
  };
};
