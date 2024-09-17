import { Lock, Sms } from "iconsax-react-native";
import React, { useState } from "react";
import { Image, Switch } from "react-native";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { appColors } from "../../constants/appColors";
import SocialLogin from "./components/SocialLogin";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerComponent isImageBackground>
      <SectionComponent
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 125,
          marginBottom: 50,
        }}
      >
        <Image
          source={require("../../assets/images/logo-text.png")}
          style={{
            width: 162,
            height: 114,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent
          text="Sign In"
          title
          style={{
            marginBottom: 21,
          }}
        />
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
        <RowComponent>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              value={isRemember}
              onValueChange={(value) => setIsRemember(value)}
              trackColor={{ false: appColors.gray3, true: appColors.primary }}
              thumbColor={appColors.white}
            />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Don't have an account? " />
          <ButtonComponent
            text="Sign Up"
            type="link"
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
