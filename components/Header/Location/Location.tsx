import React, { useContext } from "react";
import { Text, View } from "react-native";
import { LocationStyle } from "./LocationStyle";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { Navigation } from "../../../pages/model/Navigation";
import ButtonIcon from "../../Buttons/ButtonIcon";

const Location = ({navigation}: Navigation) => {
  const appTheme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer")
    navigation?.openDrawer()
  }
  return (
    <View style={LocationStyle.mainContainer}>
      <View style={LocationStyle.iconContainer}>
        <ButtonIcon renderIcon={(settings) => (
          <Feather name="menu" size={settings.isClicked ? 18 : 20}/>
        )} onClick={handleClickMenuBar}/>
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
          <ButtonIcon renderIcon={(settings) => (
            <FontAwesome5 name="calendar-check" size={settings.isClicked ? 17 : 20} />
          )}/>
        </View>
      </View>
    </View>
  );
};

export default Location;
