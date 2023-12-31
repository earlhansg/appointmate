import React, { useContext, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CategoryData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";
import { CategoryStyle } from "./CategoryStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SliderTab from "../../components/SliderTab/SliderTab";
import NavigationContextProvider from "../../components/NavigationContext/NavigationContext";

const Tab = createMaterialTopTabNavigator();

interface CustomHookProps {
  router: Navigation;
}

const useCustomHook = ({ nav }: { nav: any }) => ({
  nav,
});

type CategoryRouteProps = {
  route: RouteProp<
    {
      Category: CategoryData;
    },
    "Category"
  >;
};

const Category = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);
  const route = useRoute<CategoryRouteProps["route"]>();
  const { id, name } = route.params || { data: {} };

  const navigate = () => {
    navigation?.navigate("Home");
  }

  // const { nav } = useCustomHook({ nav: navigation });

  const dealsImage1 = require("../../assets/deals-images/cleaning.jpg");
  const dealsImage2 = require("../../assets/deals-images/beauty.jpg");

  const filteredByCategoryShops = [
    {
      id: 1,
      imageUrl: dealsImage1,
      name: "Demetrio Cleaning Services",
      position: "shop",
      address:
        "Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig Tomasaco Macasandig",
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

  const filteredByCategoryFreelancers = [
    {
      id: 1,
      imageUrl: user1,
      firstName: "Charles",
      lastName: "Peprahs",
      position: "Digital Artist",
      address: "Camaman-an",
      username: "@charlieP",
      completed: 100,
      rating: 5.9,
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
      rating: 7,
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
      rating: 7,
    },
  ];

  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };
  return (
    // <SafeAreaView style={CategoryStyle.container}>
    //   <View style={CategoryStyle.headerContainer}>
    //     <View style={CategoryStyle.headerIconContainer}>
    //       <ButtonIcon
    //         renderIcon={(settings) => (
    //           <MaterialCommunityIcons
    //             name="arrow-left"
    //             color={theme.primary.color}
    //             size={20}
    //           />
    //         )}
    //         onClick={handleClickMenuBar}
    //       />
    //     </View>
    //     <Text style={CategoryStyle.headerText}>{name}</Text>
    //   </View>

    //   <SliderTab
    //     shops={filteredByCategoryShops}
    //     freelancers={filteredByCategoryFreelancers}
    //   />
    // </SafeAreaView>
    <NavigationContextProvider nav={navigate}>
      <SafeAreaView style={CategoryStyle.container}>
        <View style={CategoryStyle.headerContainer}>
          <View style={CategoryStyle.headerIconContainer}>
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
          <Text style={CategoryStyle.headerText}>{name}</Text>
        </View>

        <SliderTab
          shops={filteredByCategoryShops}
          freelancers={filteredByCategoryFreelancers}
        />
      </SafeAreaView>
    </NavigationContextProvider>
  );
};

export default Category;
