import React, { useContext } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { Service, ServicesByCategory } from "../ScrollComponent/model/ServicesByCategory";
import { ScrollContentComponentStyle } from "./ScrollContentComponentStyle";
import { NavigationContext } from "../NavigationContext/NavigationContext";
import { Freelancers } from "../TopFreelancers/model/Freelancer";
import { Shop } from "../TopShops/model/Shop";

type ScrollContentComponentProps = {
  servicesByCategory: ServicesByCategory;
  checkoutData: Freelancers | Shop;
};

const ScrollContentComponent = ({
  servicesByCategory,
  checkoutData
}: ScrollContentComponentProps) => {
  const theme = useContext(ThemeContext);
  const screen = useContext(NavigationContext);

  console.log('ScrollContentComponentProps')

  const aircon = require("../../assets/checkout-images/air-conditioner-3.png");

  const handlePress = (serviceCheckoutData: Service) => {
    if (screen && screen.navigateToServiceCheckout) {
      screen.navigateToServiceCheckout(checkoutData, serviceCheckoutData);
    }
  };

  return (
    <>
      <Text style={ScrollContentComponentStyle.categoryNameText}>
        {servicesByCategory.categoryName}
      </Text>
      <Text style={ScrollContentComponentStyle.categoryCaptionText}>
        {servicesByCategory.caption}
      </Text>

      {servicesByCategory.services.map((service) => (
        // <TouchableWithoutFeedback key={service.id} onPress={handlePress}>
        <TouchableWithoutFeedback key={service.id} onPress={() => handlePress(service)}>
          <View
            style={[
              {
                borderColor: theme.gray.light2,
              },
              ScrollContentComponentStyle.serviceContainer,
            ]}
          >
            <View style={{ marginRight: "auto" }}>
              <Text style={ScrollContentComponentStyle.serviceName}>
                {service.serviceName}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                  maxWidth: 220,
                }}
              >
                {service.caption}
              </Text>
              <Text style={ScrollContentComponentStyle.servicePrice}>
                {service.price}
              </Text>
            </View>
            <View style={ScrollContentComponentStyle.imageContainer}>
              <Image
                source={aircon}
                resizeMode="cover"
                style={ScrollContentComponentStyle.image}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </>
  );
};

export default ScrollContentComponent;
