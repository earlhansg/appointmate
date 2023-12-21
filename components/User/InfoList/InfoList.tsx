import React, {ReactNode, useContext } from "react";

import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { InfoListStyle } from "./InfoListStyle";
import ButtonIcon from "../../Buttons/ButtonIcon";

type InfoListProps = {
  label: string;
  value: any;
  editable?: boolean;
  children?: ReactNode;
}

const InfoList = (prop: InfoListProps) => {
  const theme = useContext(ThemeContext);

  return (
    <>
    <View style={InfoListStyle.container}>
      <View style={InfoListStyle.header}>
        <Text style={InfoListStyle.headerContent1}>{prop.label}</Text>
        <Text
          style={[InfoListStyle.headerContent2, {
            color: prop.value === "Connected" ? "#2c83f3" : "#000000"
          }]}
        >
          {prop.value}
        </Text>
      </View>
      <View>
        {prop.editable && (
          <ButtonIcon
          renderIcon={(settings) => (
              <Octicons name="pencil" color={theme.primary.color} size={20} />
          )}/>
        )}
      </View>
    </View>
    {prop.children}
    </>
  );
};

export default InfoList;
