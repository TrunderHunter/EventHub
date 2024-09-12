import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }
    , 1500);
    return () => clearTimeout(timer);
  }, []);

  return isShowSplash ? <SplashScreen /> : 
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
}