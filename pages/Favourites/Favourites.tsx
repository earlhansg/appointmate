import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { FavouritesStyle } from "./FavoritesStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SlideShopsScreen from "../../components/SlideShopsScreen/SlideShopsScreen";
import SlideFreelancersScreen from '../../components/SlideFreelancersScreen/SlideFreelancersScreen'

const Tab = createMaterialTopTabNavigator();

const Favourites = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };

  const dealsImage1 = require("../../assets/deals-images/cleaning.jpg");
  const dealsImage2 = require("../../assets/deals-images/beauty.jpg");

  const favouriteShops = [
    {
      id: 1,
      imageUrl: dealsImage1,
      name: "Demetrio Cleaning Services",
      position: "shop",
      address: "Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig",
    },
    {
      id: 2,
      imageUrl: dealsImage2,
      name: "Beauty Standards",
      position: "shop",
      address: "CM Recto",
    },
    {
      id: 3,
      imageUrl: dealsImage2,
      name: "Beauty Standards",
      position: "shop",
      address: "CM Recto Lapasan",
    },
  ];

  const user1 = require("../../assets/profile-images/user1.png");

  const favouriteFreelancers = [
    {
      id: 1,
      imageUrl: user1,
      firstName: "Charles",
      lastName: "Peprahs",
      position: "Digital Artist",
      address: "Camaman-an",
      username: "@charlieP",
      completed: 100,
      rating: 5.9
    },
    {
      id: 2,
      imageUrl: user1,
      firstName: "Earl",
      lastName: "Genoso",
      position: "Host",
      address: "Bulua",
      username: "@ealhansgenoso",
      completed: 20,
      rating: 7
    },
    {
      id: 3,
      imageUrl: user1,
      firstName: "Earl",
      lastName: "Genoso",
      position: "Host",
      address: "Bulua",
      username: "@ealhansgenoso",
      completed: 20,
      rating: 7
    }
  ]
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
        <Tab.Screen
          name="Shops"
          children={() => <SlideShopsScreen shopDeals={favouriteShops}/> }
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
        <Tab.Screen
          name="Freelancers"
          children={() => <SlideFreelancersScreen freelancers={favouriteFreelancers}/> }
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
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Favourites;
