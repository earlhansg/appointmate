import React from "react";
import { Text } from "react-native";
import { ProStyle } from "./ProStyle";

const Pro = () => {
  return (
    <>
      <Text style={ProStyle.primaryText}>Become a pro</Text>
      <Text style={ProStyle.secondaryText}>you can reserve asap & more</Text>
    </>
  );
};

export default Pro;
