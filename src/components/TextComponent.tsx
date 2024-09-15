import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";
import { appColors } from "../constants/appColors";
import { fontFamilies } from "../constants/fontFamilies";
import { globalStyles } from "../styles/globalStyles";

interface TextComponentProps {
  text?: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  style?: StyleProp<TextStyle>;
  title?: boolean;
}

const TextComponent = (prop: TextComponentProps) => {
  const { text, color, size, flex, font, style, title } = prop;

  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          fontSize: title ? 24 : size ?? 14,
          flex: flex || 0,
          fontFamily: title
            ? fontFamilies.AirbnbCereal_W_Md
            : fontFamilies.AirbnbCereal_W_Bk,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
