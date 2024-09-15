import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  ButtonComponent,
  SectionComponent,
  TextComponent,
} from "../../../components";
import { Facebook } from "iconsax-react-native";

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color="gray"
        size={16}
        style={{
          textAlign: "center",
        }}
      />
      <ButtonComponent
        type="primary"
        text="Login with Facebook"
        color="#fff"
        textColor="#1877f2"
        icon={<Facebook size={20} color="black" />}
        onPress={() => {}}
        iconFlex="left"
        style={{
          marginBottom: 10,
        }}
      />
    </SectionComponent>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({});
