import React, { useContext } from "react";

import { View, Text } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { InfoListStyle } from "./InfoListStyle";
import ButtonIcon from "../../Buttons/ButtonIcon";

const InfoList = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={InfoListStyle.container}>
      <View style={InfoListStyle.header}>
        <Text style={InfoListStyle.headerContent1}>Name</Text>
        <Text
          style={InfoListStyle.headerContent2}
        >
          Earl Hans Genoso
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
