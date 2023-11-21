import React from "react";
import { Text, View } from "react-native";
import { LocationStyle } from "./LocationStyle";

const Location = () => {
  return (
    <View style={LocationStyle.mainContainer}>
      <View style={LocationStyle.iconContainer}>
        <Text>Icon</Text>
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
