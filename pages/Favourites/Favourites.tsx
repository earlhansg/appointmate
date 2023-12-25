import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FavouritesStyle } from "./FavoritesStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

const Favourites = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };
  return (
    <SafeAreaView style={FavouritesStyle.container}>
        <View style={FavouritesStyle.headerContainer}>
        <View style={FavouritesStyle.headerIconContainer}>
          <ButtonIcon
            renderIcon={(settings) => (
              <MaterialCommunityIcons
                name="arrow-left"
                color={theme.primary.color}
                size={20}
              />
            )}
            onClick={handleClickMenuBar}
          />
        </View>
        <Text style={FavouritesStyle.headerText}>Favourites</Text>
      </View>
    </SafeAreaView>
  )
}

export default Favourites
