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
import { CheckoutDetailsStyle } from "./CheckoutDetailsStyle";

type Service = {
  id: number;
  serviceName: string;
  price: number
}

type CheckoutDetailsProps = {
  checkoutData: Freelancers | Shop;
  deals: { id: number; name: string; caption: string }[];
  children?: ReactElement;
};


const CheckoutDetails = ({checkoutData, deals}: CheckoutDetailsProps) => {
  const theme = useContext(ThemeContext);
  const logo = require("../../assets/logo-images/logo1.png");

  return (
    <>
      {/* Section 1 */}
      <View
          style={CheckoutDetailsStyle.section1Container}
        >
          <Image
            source={logo}
            resizeMode="cover"
            style={CheckoutDetailsStyle.section1Img}
          />
          {"name" in checkoutData && (
            <Text
              style={CheckoutDetailsStyle.section1Text}
            >
              {(checkoutData as Shop).name}
            </Text>
          )}
        </View>

        {/* Section 2 */}
        <View
          style={CheckoutDetailsStyle.section2Container}
        >
          <Text
            style={[
              {color: theme.gray.light3, borderColor: theme.gray.light3},
              CheckoutDetailsStyle.section2Text1
            ]}
          >
            1.3km away
          </Text>
          <Text
            style={[
              { color: theme.black.dark, borderColor: theme.gray.light3}, 
              CheckoutDetailsStyle.section2Text2
            ]}
          >
            Free delivery
          </Text>
          <Text
            style={[{
              color: theme.gray.light3
            }, CheckoutDetailsStyle.section2Text3]}
          >
            &#8369; 119.00 Minimum
          </Text>
          <Text
            style={[{
              color: theme.primary.color
            }, CheckoutDetailsStyle.section2Text4]}
          >
            More Info
          </Text>
        </View>

        {/* Section 3  */}
        <View
          style={CheckoutDetailsStyle.section3Container}
        >
          <Feather name="star" size={18} color={theme.primary.color} />
          <Text
            style={[{
              color: theme.black.dark
            }, CheckoutDetailsStyle.section3Text1]}
          >
            4.5
          </Text>
          <Text
            style={[{
              color: theme.gray.light3
            }, CheckoutDetailsStyle.section3Text2]}
          >
            5000+ ratings
          </Text>
          <Text
            style={[{
              color: theme.primary.color
            }, CheckoutDetailsStyle.section3Text3]}
          >
            See reviews
          </Text>
        </View>

        {/* Section 4 */}
        <View
          style={CheckoutDetailsStyle.section4Container}
        >
          <FontAwesome5 name="tags" size={14} color={theme.primary.color} />
          <Text
            style={[{
              color: theme.black.dark
            }, CheckoutDetailsStyle.section4Text1]}
          >
            Available deals
          </Text>
        </View>

        {/* Section 5 */}
        <View style={CheckoutDetailsStyle.section5Container}>
          <FlatList
            style={{ width: "100%" }}
            data={deals}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={[{
                    backgroundColor: theme.primary.lightColor,
                    marginRight: deals.length - 1 === index ? 0 : 11
                  }, CheckoutDetailsStyle.flatListContainer]}
                >
                  <View style={{ flexDirection: "row", gap: 3 }}>
                    <MaterialCommunityIcons
                      name="sale"
                      size={15}
                      color={theme.primary.color}
                    />
                    <Text
                      style={[{
                        color: theme.primary.color,
                      }, CheckoutDetailsStyle.flatListText1]}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <Text
                    style={[{
                      color: theme.black.dark
                    }, CheckoutDetailsStyle.flatListText2]}
                  >
                    {item.caption}
                  </Text>
                </View>
              );
            }}
          />
        </View>
    </>
  );
};

export default CheckoutDetails;
