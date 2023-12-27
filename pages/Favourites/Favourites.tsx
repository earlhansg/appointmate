import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FavouritesStyle } from "./FavoritesStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SlideScreen from "../../components/SlideScreen/SlideScreen";

const Tab = createMaterialTopTabNavigator();

const Favourites = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };

  const dealsImage1 = require("../../assets/deals-images/cleaning.jpg");
  const dealsImage2 = require("../../assets/deals-images/beauty.jpg");

  const shopDeals = [
    {
      id: 1,
      imageUrl: dealsImage1,
      name: "Demetrio Cleaning Services",
      position: "shop",
      address: "Tomasaco Macasandig",
    },
    {
      id: 2,
      imageUrl: dealsImage2,
      name: "Beauty Standards",
      position: "shop",
      address: "CM Recto",
    },
  ];
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

      <Tab.Navigator>
        {/* <Tab.Screen
          name="Shops"
          component={SlideScreen}
          options={{
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "500",
            },
            tabBarActiveTintColor: theme.primary.color,
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderColor: theme.primary.color,
            },
          }}
        /> */}
        <Tab.Screen
          name="Shops"
          children={() => <SlideScreen shopDeals={shopDeals}/> }
          // component={SlideScreen}
          options={{
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "500",
            },
            tabBarActiveTintColor: theme.primary.color,
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderColor: theme.primary.color,
            },
          }}
        />
        {/* <Tab.Screen
          name="Freelancers"
          children={() => <SlideScreen shopDeals={shopDeals}/> }
          options={{
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "500",
            },
            tabBarActiveTintColor: theme.primary.color,
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderColor: theme.primary.color,
            },
          }}
        /> */}
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Favourites;
