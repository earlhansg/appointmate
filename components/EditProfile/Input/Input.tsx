import React, { useContext, useState } from "react";
import { Text, TextInput } from "react-native";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { InputStyle } from "./InputStyle";

enum Label {
  firstName = "First name",
  lastName = "Last name",
  email = "Email",
  mobileNumber = "Mobile number",
}

function isLabel(key: string): key is keyof typeof Label {
  return key in Label;
}

type InputProps = {
  label: string;
  passData: { [key: string]: string };
};

const Input: React.FC<InputProps> = ({ label, passData }) => {
  const theme = useContext(ThemeContext);

  const [currentData, setCurrentData] = useState({ [label]: passData[label] });
  const myKey: Record<string, any> = {};
  const [activeInputs, setActiveInputs] = useState({ [label]: false });

  const handleChange = (value: string, label: string) => {
    console.log("handleChange");
  };

  return isLabel(label) ? (
    <>
      <Text
        style={[
          {
            color: activeInputs[label] ? theme.black.dark : theme.gray.light3,
          },
          InputStyle.labelInput,
        ]}
      >
        {Label[label]}
      </Text>
      <TextInput
        style={[
          {
            borderColor: activeInputs[label]
              ? theme.black.dark
              : theme.gray.light3,
          },
          InputStyle.input,
        ]}
        onChangeText={(value) => handleChange(value, label)}
        onFocus={() => setActiveInputs({ [label]: !activeInputs[label] })}
        onBlur={() => setActiveInputs({ [label]: false })}
        value={currentData[label]}
      />
    </>
  ) : null;
};

export default Input;
