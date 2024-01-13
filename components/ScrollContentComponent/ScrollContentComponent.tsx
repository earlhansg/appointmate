import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { ServicesByCategory } from "../ScrollComponent/model/ServicesByCategory";
import { ScrollContentComponentStyle } from "./ScrollContentComponentStyle";

type ScrollContentComponentProps = {
  servicesByCategory: ServicesByCategory;
};

const ScrollContentComponent = ({
  servicesByCategory,
}: ScrollContentComponentProps) => {
  const theme = useContext(ThemeContext);

  const logo = require("../../assets/checkout-images/air-conditioner-3.png");

  return (
    <>
      <Text style={ScrollContentComponentStyle.categoryNameText}>
        {servicesByCategory.categoryName}
      </Text>
      <Text style={ScrollContentComponentStyle.categoryCaptionText}>
        {servicesByCategory.caption}
      </Text>

      {servicesByCategory.services.map((service) => (
        <>
          <View
            key={service.id}
            style={[
              {
                borderColor: theme.gray.light2,
              },
              ScrollContentComponentStyle.serviceContainer,
            ]}
          >
            <View style={{marginRight: "auto"}}>
              <Text style={ScrollContentComponentStyle.serviceName}>
                {service.serviceName}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
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
                source={logo}
                resizeMode="cover"
                style={ScrollContentComponentStyle.image}
              />
            </View>

          </View>
        </>
      ))}
    </>
  );
};

export default ScrollContentComponent;
