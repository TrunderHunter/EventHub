import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import RowComponent from "./RowComponent";
import ButtonComponent from "./ButtonComponent";
import { ArrowLeft } from "iconsax-react-native";
import { appColors } from "../constants/appColors";
import TextComponent from "./TextComponent";

interface ContainerComponentProps {
  isImageBackground?: boolean;
  isScrollable?: boolean;
  title?: string;
  children?: ReactNode;
  back?: boolean;
}

const ContainerComponent = (props: ContainerComponentProps) => {
  const { isImageBackground, isScrollable, title, children, back } = props;

  const navigation: any = useNavigation();

  const headerComponent = () => {
    return (
      <View style={{ flex: 1 }}>
        {(back || title) && (
          <RowComponent
            style={{
              justifyContent: "flex-start",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 20,
              marginTop: 24,
              minWidth: 48,
              minHeight: 48,
            }}
          >
            {back && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title && (
              <TextComponent
                text={title}
                title
                style={{
                  marginLeft: back ? 12 : 0,
                }}
              />
            )}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };

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
      {headerComponent()}
    </ImageBackground>
  ) : (
    <SafeAreaView style={globalStyles.container}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
