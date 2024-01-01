  import React, { useContext } from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CheckoutData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";

type CategoryRouteProps = {
  route: RouteProp<
    {
      Checkout: CheckoutData;
    },
    "Checkout"
  >;
};

const Checkout = ({navigation}: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<CategoryRouteProps["route"]>();
  const { data } = route.params || { data: {} };

  const logo = require("../../assets/logo-images/logo1.png")
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };

  return (
    <SafeAreaView style={CheckoutStyle.container}>
      <View style={CheckoutStyle.headerContainer}>
        <View style={CheckoutStyle.headerIconContainer}>
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
      </View>
      <View style={{paddingTop: 5, paddingBottom: 5,
        flexDirection:"row",
      }}>
        <Image
          source={logo}
          resizeMode="cover"
          style={{
            width: 70,
            height: 35,
          }}
        />
        <Text style={{fontSize: 16, fontWeight: "500", textAlignVertical: "center"}}>
          Burger King - Divisoria
        </Text>
      </View>
      <View style={{flexDirection: "row", gap: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 10}}>
        <Text style={{fontSize: 11, fontWeight: "500", color: theme.gray.light3, borderRightWidth: 1, borderColor: theme.gray.light3, paddingRight: 3, paddingLeft: 3}}>
            1.3km away
        </Text>
        <Text style={{fontSize: 11, color: theme.black.dark, fontWeight: "500",  borderRightWidth: 1, borderColor: theme.gray.light3, paddingRight: 3, paddingLeft: 3}}>
            Free delivery
        </Text>
        <Text style={{fontSize: 11, fontWeight: "500", color: theme.gray.light3, paddingRight: 3, paddingLeft: 3, marginRight: "auto"}}>
          &#8369; 119.00 Minimum
        </Text>
        <Text style={{fontSize: 11, fontWeight: "500", color: theme.primary.color}}>
          More Info
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Checkout;
