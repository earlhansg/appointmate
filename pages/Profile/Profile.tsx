import React from "react";
import { SafeAreaView, Animated, View, Text, StyleSheet } from "react-native";
import { ProfileStyle } from "./ProfileStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { Feather } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

const Profile = ({ navigation }: Navigation) => {
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.openDrawer();
  };
  return (
    <SafeAreaView style={ProfileStyle.container}>
      <View
        style={{
          margin: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: "#e0e0e0",
        }}
      >
        <ButtonIcon
          renderIcon={(settings) => (
            <Feather name="x" size={settings.isClicked ? 17 : 20} />
          )}
          onClick={handleClickMenuBar}
        />
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
