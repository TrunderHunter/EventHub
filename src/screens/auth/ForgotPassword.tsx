import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "../../components";
import { appColors } from "../../constants/appColors";
import { Arrow, ArrowRight, Sms } from "iconsax-react-native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <TextComponent text="Please enter your email address to request a password reset." />
        <SpaceComponent height={20} />
        <InputComponent
          value={email}
          placeholder="Email"
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
          type="email-address"
          onChanget={(text) => setEmail(text)}
        />
        <SectionComponent>
          <ButtonComponent
            text="Send Email"
            type="primary"
            onPress={() => {}}
            icon={<ArrowRight size={22} color={appColors.white} />}
            iconFlex="right"
          />
        </SectionComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPassword;
