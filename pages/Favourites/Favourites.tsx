import React, { useContext } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { FavouritesStyle } from "./FavoritesStyle";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ShopDeal } from "../../components/Deals/model/ShopDeal";
import ShopDeals from "../../components/Deals/ShopDeals/ShopDeals";

const Tab = createMaterialTopTabNavigator();

type SlideScreenProps = {
  navigation?: Navigation;
  shopDeals: ShopDeal[];
}

function SlideScreen({ navigation, shopDeals }: SlideScreenProps) {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          // backgroundColor: "red",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 10,
          gap: 10
        }}
      >
        <Pressable
          style={[
            {
              backgroundColor: theme.primary.color,
            },
            {
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 25
            },
          ]}
        >
          <Text
            style={[
              { color: theme.white.color },
              {
                fontWeight: "500",
                fontSize: 13,
              },
            ]}
          >
            Home Service
          </Text>
        </Pressable>
        <Pressable
          style={[
            {
              backgroundColor: theme.white.color,
              borderColor: theme.gray.light2,
              borderWidth: 1
            },
            {
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 25
            },
          ]}
        >
          <Text
            style={[
              { color: theme.black.dark },
              {
                fontWeight: "500",
                fontSize: 13,
              },
            ]}
          >
            Walk In
          </Text>
        </Pressable>
      </View>
      <View>
          <ShopDeals shopDeals={shopDeals} showInHorizontal={false}/>
      </View>
    </View>
  );
}

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
