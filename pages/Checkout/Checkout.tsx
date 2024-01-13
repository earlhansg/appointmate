import React, { useContext, useEffect, useRef, useState, useMemo } from "react";
import { SafeAreaView, View } from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { CheckoutData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckoutDetails from "../../components/CheckoutDetails/CheckoutDetails";
import ScrollComponent from "../../components/ScrollComponent/ScrollComponent";
import ScrollContentComponent from "../../components/ScrollContentComponent/ScrollContentComponent";
import NavigationContextProvider from "../../components/NavigationContext/NavigationContext";

type CategoryRouteProps = {
  route: RouteProp<
    {
      Checkout: CheckoutData;
    },
    "Checkout"
  >;
};

export type Category = {
  categoryId: number;
  height: number;
  pageActive: boolean;
};

const Checkout = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<CategoryRouteProps["route"]>();
  const { checkoutData } = route.params || { data: {} as CheckoutData };

  const servicesByCategory = useMemo(
    () => [
      {
        id: 1,
        categoryName: "Cleaning",
        caption: "Cleaning Header",
        services: [
          {
            id: 1,
            serviceName: "Cleaning 1",
            caption: "Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Cleaning 2",
            caption: "Cleaning 2",
            price: 5800,
          },
          {
            id: 3,
            serviceName: "Cleaning 3",
            caption: "Cleaning 3",
            price: 5800,
          },
          {
            id: 4,
            serviceName: "Cleaning 4",
            caption: "Cleaning 4",
            price: 5800,
          },
        ],
      },
      {
        id: 2,
        categoryName: "Repair",
        caption: "Repair Header",
        services: [
          {
            id: 1,
            serviceName: "Repair 1",
            caption: "Repair 1",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Repair 2",
            caption: "Repair 2",
            price: 5800,
          },
          {
            id: 3,
            serviceName: "Repair 3",
            caption: "Repair 3",
            price: 5800,
          },
          {
            id: 4,
            serviceName: "Repair 4",
            caption: "Repair 4",
            price: 5800,
          },
        ],
      },
      {
        id: 3,
        categoryName: "Disassemble",
        caption: "Disassemble Header",
        services: [
          {
            id: 1,
            serviceName: "Disassemble 1",
            caption: "Disassemble 1",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Disassemble 2",
            caption: "Disassemble 2",
            price: 5800,
          },
        ],
      },
      {
        id: 4,
        categoryName: "Installation",
        caption: "Installation Header",
        services: [
          {
            id: 1,
            serviceName: "Installation 1",
            caption: "Installation 1",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Installation 2",
            caption: "Installation 2",
            price: 5800,
          },
          {
            id: 3,
            serviceName: "Installation 3",
            caption: "Installation 3",
            price: 5800,
          },
          {
            id: 4,
            serviceName: "Installation 4",
            caption: "Installation 4",
            price: 5800,
          },
        ],
      },
      {
        id: 5,
        categoryName: "Troubleshoot",
        caption: "Troubleshoot Header",
        services: [
          {
            id: 1,
            serviceName: "Troubleshoot 1",
            caption: "Troubleshoot 1",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Troubleshoot 2",
            caption: "Troubleshoot 2",
            price: 5800,
          },
        ],
      },
    ],
    []
  );

  const deals = useMemo(
    () => [
      {
        id: 1,
        name: "20% Off",
        caption:
          "Min. order 199. Valid for all items. Min. order 199. Valid for all items. Min. order 199. Valid for all items.Min. order 199. Valid for all items. Min. order 199. Valid for all items. Min. order 199. Valid for all items. Min. order 199. Valid for all items.",
      },
      {
        id: 2,
        name: "20% Off",
        caption: "Min. order 199. Valid for all items.",
      },
      {
        id: 3,
        name: "20% Off",
        caption: "Min. order 199. Valid for all items.",
      },
    ],
    []
  );

  const logo = require("../../assets/logo-images/logo1.png");

  const [categoryHeights, setCategoryHeights] = useState<Category[]>([]);
  const categoryRefs = useRef<Array<View | null>>([]);

  useEffect(() => {
    getHeight();
    // Cleanup function
    return () => {
      // Clear any resources or subscriptions here
      setCategoryHeights([]);
    };
  }, [categoryRefs]);

  const getHeight = () => {
    const heights: Category[] = [];
    categoryRefs.current.forEach((ref, i) => {
      ref?.measureInWindow((x, y, width, height) => {
        heights.push({ categoryId: i, height, pageActive: false });
      });
    });
    setCategoryHeights(heights);
    console.log("categoryHeights", categoryHeights);
  };

  const navigate = () => {
    console.log("going back to home")
    navigation?.navigate("ServiceCheckout");
  }

  return (
    <NavigationContextProvider serviceCheckout={navigate}>
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
              onClick={() => navigation?.navigate("Home")}
            />
          </View>
        </View>

        <ScrollComponent
          servicesByCategory={servicesByCategory}
          categoryHeights={categoryHeights}
          checkoutDetails={
            <CheckoutDetails checkoutData={checkoutData} deals={deals} />
          }
        >
          <>
            {servicesByCategory.map((service) => (
              <View
                key={`parent_${service.id}`}
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                  marginRight: 15,
                }}
                ref={(el) => (categoryRefs.current[service.id] = el)}
                onLayout={getHeight}
              >
                <ScrollContentComponent
                  key={`child_${service.id}`}
                  servicesByCategory={service}
                />
              </View>
            ))}
          </>
        </ScrollComponent>
      </SafeAreaView>
    </NavigationContextProvider>
  );
};

export default Checkout;
