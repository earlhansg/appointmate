import React, { useContext } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ProfileStyle } from "./ProfileStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { Feather } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import User from "../../components/User/User";


const Profile = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };
  return (
    <SafeAreaView style={ProfileStyle.container}>
      <View
        style={ProfileStyle.headerContainer}
      >
        <View style={ProfileStyle.headerIconContainer}>
            <ButtonIcon
            renderIcon={(settings) => (
                <Feather name="x" color={theme.primary.color} size={settings.isClicked ? 17 : 20} />
            )}
            onClick={handleClickMenuBar}
            />
        </View>
        <Text style={ProfileStyle.headerText}>Profile</Text>
      </View>
      <User/>
    </SafeAreaView>
  );
};

export default Profile;
