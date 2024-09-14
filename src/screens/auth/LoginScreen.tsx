import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonComponent from "../../components/ButtonComponent";
import { globalStyles } from "../../styles/globalStyles";
import { InputComponent } from "../../components";
import { Lock, LockSlash, Sms } from "iconsax-react-native";
import { appColors } from "../../constants/appColors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={[
        globalStyles.container,
        {
          padding: 16,
        },
      ]}
    >
      <Text>LoginScreen</Text>
      <InputComponent
        value={email}
        placeholder="Email"
        allowClear
        type="email-address"
        affix={<Sms size={22} color={appColors.gray} />}
        onChanget={(text) => setEmail(text)}
      />
      <InputComponent
        value={password}
        placeholder="Password"
        isPassword
        affix={<Lock size={22} color={appColors.gray} />}
        onChanget={(text) => setPassword(text)}
      />
    </View>
  );
};

export default LoginScreen;
