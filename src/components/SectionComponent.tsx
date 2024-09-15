import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

interface SectionComponentProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const SectionComponent = (props: SectionComponentProps) => {
  const { children, style } = props;

  return <View style={[globalStyles.section, style]}>{children}</View>;
};

export default SectionComponent;
