import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../../components/ThemeContext/ThemeContext";

type Service = {
    id: number;
    serviceName: string;
    caption: string;
    price: number;
  };
  
  type ServicesByCategory = {
    id: number;
    categoryName: string;
    caption: string;
    services: Service[];
  };

  type ScrollContentComponentProps = {
    servicesByCategory: ServicesByCategory;
  }

const ScrollContentComponent = ({servicesByCategory} : ScrollContentComponentProps) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        {servicesByCategory.categoryName}
      </Text>
      <Text
        style={{
          fontSize: 13,
          marginTop: 5,
        }}
      >
        {servicesByCategory.caption}
      </Text>

      {servicesByCategory.services.map((service, index) => (
        <>
          <View
            key={service.id}
            style={{
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 2,
              borderColor: theme.gray.light2,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
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
            <Text
              style={{
                fontSize: 13,
                marginTop: 10,
              }}
            >
              {service.price}
            </Text>
          </View>
        </>
      ))}
    </>
  );
};

export default ScrollContentComponent;
