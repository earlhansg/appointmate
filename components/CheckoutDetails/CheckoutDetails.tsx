import React, { ReactElement, useContext, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
} from "react-native";
import { Shop } from "../TopShops/model/Shop";

import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { Freelancers } from "../TopFreelancers/model/Freelancer";

type Service = {
  id: number;
  serviceName: string;
  price: number
}

type CheckoutDetailsProps = {
  animHeaderValue: Animated.Value;
  checkoutData: Freelancers | Shop;
  deals: { id: number; name: string; caption: string }[];
  servicesByCategory: {id: number; categoryName: string; services:Service[]}[]
  children?: ReactElement;
};

const maxHeaderHeight = 295;
const minHeaderHeight = 50;

// const CheckoutDetails = ({
//   animHeaderValue,
//   checkoutData,
//   deals,
//   children,
// }: CheckoutDetailsProps) => {
const CheckoutDetails = ({animHeaderValue, checkoutData, deals, servicesByCategory}: CheckoutDetailsProps) => {
  const theme = useContext(ThemeContext);
  const logo = require("../../assets/logo-images/logo1.png");

  // console.log("", animHeaderValue.)

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, 130],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: "clamp",
  });

  return (
    <Animated.View style={{height: animateHeaderHeight}}>
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
                <View style={{paddingTop: 10, paddingBottom: 10,
                marginRight: servicesByCategory.length - 1 === index ? 0 : 30,
                
                }}>
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
    </Animated.View>
  );
};

export default CheckoutDetails;
