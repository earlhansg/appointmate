import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { CheckoutData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Shop } from "../../components/TopShops/model/Shop";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckoutDetails from "../../components/CheckoutDetails/CheckoutDetails";

type CategoryRouteProps = {
  route: RouteProp<
    {
      Checkout: CheckoutData;
    },
    "Checkout"
  >;
};

const Checkout = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<CategoryRouteProps["route"]>();
  const { checkoutData } = route.params || { data: {} as CheckoutData };

  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const servicesByCategory = useMemo(
    () => [
      {
        id: 1,
        categoryName: "Cleaning",
        services: [
          {
            id: 1,
            serviceName: "Cleaning half",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Cleaning full",
            price: 5800,
          },
        ],
      },
      {
        id: 2,
        categoryName: "Repair",
        services: [
          {
            id: 1,
            serviceName: "Repair half",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Repair full",
            price: 5800,
          },
        ],
      },
      {
        id: 3,
        categoryName: "Disassemble",
        services: [
          {
            id: 1,
            serviceName: "Repair half",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Repair full",
            price: 5800,
          },
        ],
      },
      {
        id: 4,
        categoryName: "Installation",
        services: [
          {
            id: 1,
            serviceName: "Repair half",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Repair full",
            price: 5800,
          },
        ],
      },
      {
        id: 5,
        categoryName: "Troubleshoot",
        services: [
          {
            id: 1,
            serviceName: "Repair half",
            price: 500,
          },
          {
            id: 2,
            serviceName: "Repair full",
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

  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };

  const [scroll, setScroll] = useState<any | number>(0);

  useEffect(() => {
    console.log("scrollPosition", scroll);
  }, [scroll]);

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
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutDetails checkoutData={checkoutData} deals={deals}/>
        
        <View
          style={{
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomWidth: StyleSheet.hairlineWidth,
            backgroundColor: "white"
          }}
        >
          <FlatList
            style={{ width: "100%" }}
            data={servicesByCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginRight:
                      servicesByCategory.length - 1 === index ? 0 : 30,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    {item.categoryName}
                  </Text>
                </View>
              );
            }}
          />
        </View>


        <View
            style={{
              width: "100%",
              height: 200,
              // marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
                <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
                <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
                <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
                <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: 200,
              marginTop: 10,
              backgroundColor: "pink",
            }}
          ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
