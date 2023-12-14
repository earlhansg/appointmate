import React, { useContext } from "react";
import { Text, View } from "react-native";
import { LocationStyle } from "./LocationStyle";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Location = () => {
  const appTheme = useContext(ThemeContext);
  return (
    <View style={LocationStyle.mainContainer}>
      <View style={LocationStyle.iconContainer}>
        <Feather name="menu" size={20} />
      </View>
      <View style={LocationStyle.contentContainer}>
        <View style={[LocationStyle.firstContent]}>
          <View>
            <Text
              style={[
                { color: appTheme.white.color },
                { backgroundColor: appTheme.primary.color },
                LocationStyle.firstContentText,
              ]}
            >
              <Feather name="map-pin" size={13} color={appTheme.white.color} />
              &nbsp;CDO
            </Text>
          </View>
        </View>
        <View style={LocationStyle.secondContent}>
          <FontAwesome5 name="calendar-check" size={20} />
        </View>
      </View>
    </View>
  );
};

export default Location;
