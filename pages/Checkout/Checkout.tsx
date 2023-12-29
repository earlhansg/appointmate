import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

const Checkout = ({navigation}: Navigation) => {
  const theme = useContext(ThemeContext);
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
    </SafeAreaView>
  );
};

export default Checkout;
