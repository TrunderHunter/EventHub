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
import { globalStyles } from "../styles/globalStyles";
import { appColors } from "../constants/appColors";
import { fontFamilies } from "../constants/fontFamilies";

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

  return type === "primary" ? (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
    >
      <TouchableOpacity
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color ?? appColors.primary,
            marginBottom: 10,
            width: "80%",
          },
          style,
        ]}
        onPress={onPress}
      >
        {icon && iconFlex === "left" && icon}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          style={[
            textStyle,
            {
              marginLeft: icon && iconFlex === "left" ? 5 : 0,
              marginRight: icon && iconFlex === "right" ? 5 : 0,
              fontFamily: fontFamilies.AirbnbCereal_W_Md,
              textAlign: "center",
            },
          ]}
          flex={icon && iconFlex === "right" ? 1 : 0}
          size={16}
        />
        {icon && iconFlex === "right" && icon}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === "link" ? appColors.primary : appColors.text}
        style={textStyle}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
