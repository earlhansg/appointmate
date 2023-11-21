import React, { useContext } from "react";
import { Text, View } from "react-native";
import { LocationStyle } from "./LocationStyle";
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Location = () => {
  const appTheme =  useContext(ThemeContext)
  return (
    <View style={LocationStyle.mainContainer}>
      <View style={LocationStyle.iconContainer}>
        <Feather name="map-pin" size={20} color={appTheme.primary.color} />
      </View>
      <View style={LocationStyle.contentContainer}>
        <Text style={LocationStyle.contentPrimary}>Home</Text>
        <Text style={LocationStyle.contentSecondary}>
          Cagayan De Oro City Misamis
        </Text>
      </View>
    </View>
  );
};

export default Location;
