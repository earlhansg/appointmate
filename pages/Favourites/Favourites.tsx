import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FavouritesStyle } from "./FavoritesStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function SlideScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Test</Text>
    </View>
  );
}

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

      <Tab.Navigator style={{backgroundColor: 'red', flex: 1}}>
        <Tab.Screen name="Shops" component={SlideScreen} />
        <Tab.Screen name="Freelancers" component={SlideScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Favourites;
