import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../styles/globalStyles";
import Swiper from "react-native-swiper";
import { appInfos } from "../../constants/appInfos";
import { appColors } from "../../constants/appColors";
import TextComponent from "../../components/TextComponent";

const OnbroadingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={globalStyles.container}>
      <Swiper
        style={{}}
        loop={false}
        showsPagination={true}
        activeDotColor={appColors.white}
        index={index}
        onIndexChanged={(index) => {
          setIndex(index);
        }}
      >
        <Image
          source={require("../../assets/images/onboarding1.png")}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding2.png")}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding3.png")}
          style={{
            flex: 1,
            width: appInfos.sizes.WIDTH,
            height: appInfos.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
      </Swiper>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginHorizontal: 20,
          marginVertical: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <TextComponent text="Skip" color={appColors.white} size={14} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (index < 2) {
              setIndex(index + 1);
            } else {
              navigation.navigate("LoginScreen");
            }
          }}
        >
          <TextComponent text="Next" color={appColors.white} size={14} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;
