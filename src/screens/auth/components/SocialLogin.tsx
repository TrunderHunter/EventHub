import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../../components";
import { FacebookIcon, GoogleIcon } from "../../../assets/svgs";

const SocialLogin = () => {
  return (
    <SectionComponent
      style={{
        alignItems: "center",
      }}
    >
      <TextComponent
        text="OR"
        color="gray"
        size={16}
        style={{
          textAlign: "center",
        }}
      />
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        text="Login with Facebook"
        color="#fff"
        textColor="#1877f2"
        onPress={() => {}}
        icon={<FacebookIcon />}
        iconFlex="left"
      />
      <ButtonComponent
        type="primary"
        text="Login with Google"
        color="#fff"
        textColor="#db4437"
        icon={<GoogleIcon />}
        onPress={() => {}}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
