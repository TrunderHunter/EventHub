import {
  View,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";
import TextComponent from "./TextComponent";

interface ButtonComponentProps {
  icon?: ReactNode;
  text?: string;
  type?: "primary" | "text" | "link";
  color?: string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: "left" | "right";
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const {
    icon,
    iconFlex,
    text,
    type,
    color,
    style,
    textColor,
    textStyle,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: type === "primary" ? color : "transparent",
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        },
        style,
      ]}
      onPress={onPress}
    >
      {icon && iconFlex === "left" && icon}
      <TextComponent text={text} color={textColor} style={textStyle} />
      {icon && iconFlex === "right" && icon}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
