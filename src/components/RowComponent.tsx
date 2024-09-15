import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

interface RowComponentProps {
  children?: React.ReactNode;
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: RowComponentProps) => {
  const { children, justifyContent, alignItems, style, onPress } = props;

  const localStyles = [
    globalStyles.row,
    {
      justifyContent: justifyContent ?? "space-between",
      alignItems: alignItems ?? "center",
    },
    style,
  ];

  return onPress ? (
    <TouchableOpacity activeOpacity={0.9} style={localStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyles}>{children}</View>
  );
};

export default RowComponent;
