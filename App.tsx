import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { SplashScreen } from "./src/screens";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import MainNavigator from "./src/navigators/MainNavigator";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [assetToken, setAssetToken] = useState("");

  const { getItem, setItem } = useAsyncStorage("assetToken");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
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
    <>
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
    </>
  );
}
