import React, { ReactElement, useContext, useEffect, useRef, useState, useMemo } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
  Dimensions
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

  const servicesByCategory = useMemo(() => [
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
  ], []);

  const deals = useMemo(() => [
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
  ], []);

  const logo = require("../../assets/logo-images/logo1.png");
  
  const handleClickMenuBar = () => {
    console.log("open drawer");
    navigation?.navigate("Home");
  };

  const renderCategoryItem = ({ item }: { item: { id: number; categoryName: string } }) => (
    <View style={{ paddingTop: 10, paddingBottom: 10, marginRight: 30 }}>
      <Text style={{ fontSize: 14, fontWeight: "500" }}>{item.categoryName}</Text>
    </View>
  );


  const scrollPosition = useRef(new Animated.Value(0)).current;
  // const minHeaderHeight = 30
  // const maxHeaderHeight = 295

  const minHeaderHeight = 40;
  const maxHeaderHeight = 295;

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 200, 450],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  // const diplaySection1 = scrollPosition.interpolate({
  //   inputRange: [0, 450],
  //   outputRange: ['none', 'none'],
  //   extrapolate: 'clamp',
  // });

  const size = scrollPosition.interpolate({
    inputRange: [0, 100, 200, 300, 400],
    outputRange: [20, 17, 15, 13, 11],
    extrapolate: 'clamp',
  });
  // const imageHeight = scrollPosition.interpolate({
  //   inputRange: [0, 400],
  //   outputRange: [100, 50],
  //   extrapolateLeft: 'identity',
  //   extrapolateRight: 'clamp',
  // });
  // const imagePosition = scrollPosition.interpolate({
  //   inputRange: [0, 400],
  //   outputRange: [(37 * Dimensions.get('window').width) / 100, 0],
  //   extrapolateLeft: 'identity',
  //   extrapolateRight: 'clamp',
  // });

  const [scroll, setScroll] = useState<any | number>(0)

  useEffect(() => {
    console.log("scrollPosition", scroll)
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
      <View>
        <Animated.View
          style={{
            // position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            height: headerHeight,
            backgroundColor: "lightgreen",
          }}
        >
          {/* <Animated.Text
            style={{
              opacity: opacity,
              fontSize: size,
            }}>
            Header
          </Animated.Text> */}

      <Animated.View style={{ 
        // paddingTop: 5, paddingBottom: 10, 
        flexDirection: "row", opacity: opacity,
        backgroundColor: "red",
        padding: scroll >= 350 ? 0 : 5,
        paddingBottom: scroll >= 350 ? 0 : 10,
        maxHeight: scroll >= 350 ? 0 : 50,
        }}>
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
      </Animated.View>


        {/* Section 2 */}
          <Animated.View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingLeft: 15,
              paddingRight: 15,
              // paddingTop: 10,
              opacity: opacity,
              maxHeight: scroll >= 300 ? 0 : 50,
              paddingTop: scroll >= 300 ? 0 : 10,
              // display: scroll > 300 ? "none" : "flex"
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
          </Animated.View>

          {/* Section 3  */}
          {/* <View>
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
          </View> */}

          <View
            style={{
              marginTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
              borderBottomWidth: StyleSheet.hairlineWidth,
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
        </Animated.View>
        {/* <CheckoutDetails animHeaderValue={scrollPosition} checkoutData={checkoutData} deals={deals} servicesByCategory={servicesByCategory}/> */}
        <Animated.ScrollView
          // onScroll={
          //   Animated.event(
          //   [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
          //   { useNativeDriver: false }
          // )}
          onScroll={(event) => {
            const scrollY = event.nativeEvent.contentOffset.y;
            setScroll(scrollY);
            // Your additional logic here
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollPosition } } }],
              { useNativeDriver: false }
            )(event);
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={[styles.scrollView]}
        >
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
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "skyblue",
  },
});

export default Checkout;
