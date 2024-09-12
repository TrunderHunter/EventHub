import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { StatusBar } from "react-native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import { SplashScreen } from "./src/screens";

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsShowSplash(false);
  //   }
  //   , 1500);
  //   return () => clearTimeout(timer);
  // }, []);

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
          <AuthNavigator />
        </NavigationContainer>
      )}
    </>
  );
}
