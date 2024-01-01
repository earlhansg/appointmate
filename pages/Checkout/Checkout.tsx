import React, { useContext } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { CheckoutData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Shop } from "../../components/TopShops/model/Shop";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

  const deals = [
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
  ];

  const servicesByCategory = [
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
    }
  ];

  const logo = require("../../assets/logo-images/logo1.png");
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
      <View style={{ paddingTop: 5, paddingBottom: 10, flexDirection: "row" }}>
        <Image
          source={logo}
          resizeMode="cover"
          style={{
            width: 70,
            height: 35,
          }}
        />
        {"name" in checkoutData && (
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              textAlignVertical: "center",
            }}
          >
            {(checkoutData as Shop).name}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontWeight: "500",
            color: theme.gray.light3,
            borderRightWidth: 1,
            borderColor: theme.gray.light3,
            paddingRight: 3,
            paddingLeft: 3,
          }}
        >
          1.3km away
        </Text>
        <Text
          style={{
            fontSize: 11,
            color: theme.black.dark,
            fontWeight: "500",
            borderRightWidth: 1,
            borderColor: theme.gray.light3,
            paddingRight: 3,
            paddingLeft: 3,
          }}
        >
          Free delivery
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "500",
            color: theme.gray.light3,
            paddingRight: 3,
            paddingLeft: 3,
            marginRight: "auto",
          }}
        >
          &#8369; 119.00 Minimum
        </Text>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "500",
            color: theme.primary.color,
            textAlignVertical: "center",
          }}
        >
          More Info
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}
        >
          <Feather name="star" size={18} color={theme.primary.color} />
          <Text
            style={{
              fontSize: 14,
              color: theme.black.dark,
              fontWeight: "500",
              marginLeft: 8,
              textAlignVertical: "center",
            }}
          >
            4.5
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: theme.gray.light3,
              fontWeight: "500",
              marginLeft: 10,
              textAlignVertical: "center",
              marginRight: "auto",
            }}
          >
            5000+ ratings
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "500",
              color: theme.primary.color,
              textAlignVertical: "center",
            }}
          >
            See reviews
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15,
          }}
        >
          <FontAwesome5 name="tags" size={14} color={theme.primary.color} />
          <Text
            style={{
              fontSize: 14,
              color: theme.black.dark,
              fontWeight: "500",
              marginLeft: 7,
              textAlignVertical: "center",
            }}
          >
            Available deals
          </Text>
        </View>
        <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 15 }}>
          <FlatList
            style={{ width: "100%" }}
            data={deals}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    backgroundColor: theme.primary.lightColor,
                    padding: 10,
                    width: 176,
                    height: 85,
                    marginRight: deals.length - 1 === index ? 0 : 11,
                    borderRadius: 10,
                  }}
                >
                  <View style={{ flexDirection: "row", gap: 3 }}>
                    <MaterialCommunityIcons
                      name="sale"
                      size={15}
                      color={theme.primary.color}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: theme.primary.color,
                        fontWeight: "500",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 10,
                      color: theme.black.dark,
                      // fontWeight: "500",
                      maxHeight: 36,
                      overflow: "hidden",
                      marginTop: 3,
                    }}
                  >
                    {item.caption}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <View style={{marginTop: 10, paddingLeft: 15, paddingRight: 15, borderBottomWidth: StyleSheet.hairlineWidth}}>
        <FlatList
          style={{ width: "100%"}}
          data={servicesByCategory}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View style={{paddingTop: 10, paddingBottom: 10, marginRight: 30 }}>
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
    </SafeAreaView>
  );
};

export default Checkout;
