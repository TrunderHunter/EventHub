import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { appInfos } from "../constants/appInfos";
import { SpaceComponent } from "../components";
import { appColors } from "../constants/appColors";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/plash-img.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      imageStyle={{ flex: 1, resizeMode: "cover" }}
    >
      <Image
        source={require("../assets/images/Logo.png")}
        style={{
          width: appInfos.sizes.WIDTH * 0.7,
          resizeMode: "contain",
        }}
      />
      <SpaceComponent height={20} />
      <ActivityIndicator size="large" color={appColors.grey} />
    </ImageBackground>
  );
};

export default SplashScreen;
