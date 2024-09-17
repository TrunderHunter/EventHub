import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { SplashScreen } from "./src/screens";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import MainNavigator from "./src/navigators/MainNavigator";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [assetToken, setAssetToken] = useState("");

  const { getItem, setItem } = useAsyncStorage("assetToken");

  const fetchFonts = () => {
    return Font.loadAsync({
      AirbnbCereal_W_Bd: require("./assets/fonts/AirbnbCereal_W_Bd.otf"),
      AirbnbCereal_W_Bk: require("./assets/fonts/AirbnbCereal_W_Bk.otf"),
      AirbnbCereal_W_Blk: require("./assets/fonts/AirbnbCereal_W_Blk.otf"),
      AirbnbCereal_W_Lt: require("./assets/fonts/AirbnbCereal_W_Lt.otf"),
      AirbnbCereal_W_Md: require("./assets/fonts/AirbnbCereal_W_Md.otf"),
      AirbnbCereal_W_XBd: require("./assets/fonts/AirbnbCereal_W_XBd.otf"),
    });
  };

  const loadFonts = async () => {
    await fetchFonts();
    setIsShowSplash(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    loadFonts();
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();

    console.log("token", token);
    if (token) {
      setAssetToken(token);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {assetToken ? <MainNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </GestureHandlerRootView>
  );
}
