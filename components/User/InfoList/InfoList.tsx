import React, { useContext } from "react";

import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { InfoListStyle } from "./InfoListStyle";
import ButtonIcon from "../../Buttons/ButtonIcon";

type InfoListProps = {
  label: string;
  value: any;
}

const InfoList = (prop: InfoListProps) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={InfoListStyle.container}>
      <View style={InfoListStyle.header}>
        <Text style={InfoListStyle.headerContent1}>{prop.label}</Text>
        <Text
          style={InfoListStyle.headerContent2}
        >
          {prop.value}
        </Text>
      </View>
      <View>
        <ButtonIcon
            renderIcon={(settings) => (
                <Octicons name="pencil" color={theme.primary.color} size={20} />
            )}/>
      </View>
    </View>
  );
};

export default InfoList;
