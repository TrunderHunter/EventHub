import { View, Text, ImageBackground } from "react-native";
import React, { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

interface ContainerComponentProps {
  isImageBackground?: boolean;
  isScrollable?: boolean;
  title?: string;
  children?: ReactNode;
}

const ContainerComponent = (props: ContainerComponentProps) => {
  const { isImageBackground, isScrollable, title, children } = props;

  const returnContainer = isScrollable ? (
    <ScrollView>{children}</ScrollView>
  ) : (
    <View>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={require("../assets/images/plash-img.png")}
      style={{ flex: 1 }}
      imageStyle={{ resizeMode: "cover" }}
    >
      {returnContainer}
    </ImageBackground>
  ) : (
    <SafeAreaView style={globalStyles.container}>
      <View>{returnContainer}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
