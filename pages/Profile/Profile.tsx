import React, { useContext } from "react";
import { SafeAreaView, Animated, View, Text, StyleSheet } from "react-native";
import { ProfileStyle } from "./ProfileStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { Feather } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";


const Profile = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };
  return (
    <SafeAreaView style={ProfileStyle.container}>
      <View
        style={{
          margin: 10,
          borderBottomWidth: StyleSheet.hairlineWidth,
          flexDirection: "row",
          borderColor: "#e0e0e0",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <View style={{width: "10%"}}>
            <ButtonIcon
            renderIcon={(settings) => (
                <Feather name="x" color={theme.primary.color} size={settings.isClicked ? 17 : 20} />
            )}
            onClick={handleClickMenuBar}
            />
        </View>
        <Text style={{fontWeight:"500", fontSize: 14}}>Profile</Text>
      </View>
      <View style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        borderColor: "#e0e0e0",
        borderWidth: 1,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
      }}>
        <View style={{flexDirection: "row"}}>
            <View style={{marginRight: "auto"}}>
                <Text style={{fontSize: 13, marginTop: 5}}>Name</Text>
                <Text style={{fontWeight:"500", 
                fontSize: 14, marginTop: 10, marginBottom: 5}}>Earl Hans Genoso</Text>
            </View>
            <View>
                <Octicons name="pencil" color={theme.primary.color} size={20} />
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
