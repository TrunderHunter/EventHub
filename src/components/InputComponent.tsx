import { EyeSlash } from "iconsax-react-native";
import React, { ReactNode, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { appColors } from "../constants/appColors";
import AnDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface InputComponentProps {
  value?: string;
  placeholder?: string;
  onChanget?: (text: string) => void;
  affix?: ReactNode;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: TextInput["props"]["keyboardType"];
}

const InputComponent = (props: InputComponentProps) => {
  const {
    value,
    placeholder,
    onChanget,
    affix,
    suffix,
    isPassword,
    allowClear,
    type,
  } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View
      style={{
        ...styles.inputContainer,
      }}
    >
      {affix}
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onChanget}
        secureTextEntry={isPassword && !isShowPassword}
        placeholderTextColor={appColors.gray2}
        keyboardType={type ?? "default"}
      />
      {suffix}
      <TouchableOpacity
        onPress={() => {
          if (allowClear && value) {
            onChanget?.("");
          }
          if (isPassword) {
            setIsShowPassword(!isShowPassword);
          }
        }}
      >
        {isPassword ? (
          <FontAwesome
            name={isShowPassword ? "eye" : "eye-slash"}
            size={22}
            color={appColors.gray1}
          />
        ) : (
          allowClear &&
          (value?.length ?? 0) > 0 && (
            <AnDesign name="close" size={22} color={appColors.gray1} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: "100%",
    minHeight: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 19,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    paddingHorizontal: 14,
  },
});
