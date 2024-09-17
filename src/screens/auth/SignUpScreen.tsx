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

const initValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpScreen = ({ navigation }: any) => {
  const [values, setValues] = useState(initValues);

  const handleChange = (name: string, value: string) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <ContainerComponent isImageBackground back>
      <SectionComponent>
        <TextComponent
          text="Sign Up"
          title
          style={{
            marginBottom: 21,
          }}
        />
        <InputComponent
          value={values.username}
          placeholder="Username"
          allowClear
          type="default"
          affix={<Sms size={22} color={appColors.gray} />}
          onChanget={(text) => handleChange("username", text)}
        />
        <InputComponent
          value={values.email}
          placeholder="Email"
          allowClear
          type="email-address"
          affix={<Sms size={22} color={appColors.gray} />}
          onChanget={(text) => handleChange("email", text)}
        />
        <InputComponent
          value={values.password}
          placeholder="Password"
          isPassword
          affix={<Lock size={22} color={appColors.gray} />}
          onChanget={(text) => handleChange("password", text)}
        />
        <InputComponent
          value={values.confirmPassword}
          placeholder="Confirm Password"
          isPassword
          affix={<Lock size={22} color={appColors.gray} />}
          onChanget={(text) => handleChange("confirmPassword", text)}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            text="Sign In"
            type="link"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
