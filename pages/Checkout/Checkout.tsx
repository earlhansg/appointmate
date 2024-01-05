import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  ElementRef,
  Children,
  useLayoutEffect
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
  Button,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  findNodeHandle,
  UIManager,
  MeasureInWindowOnSuccessCallback,
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

  const scrollViewRef = useRef<ScrollView>(null);
  const firstViewRef = useRef<View>(null);

  const handleScroll = () => {
    // Assuming you want to scroll to a specific position, for example, 300 pixels from the top.
    // console.log("handlescroll" scrollViewRef.current?.s)
    scrollViewRef.current?.scrollTo({ y: 300, animated: true });
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
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
      >
        <CheckoutDetails checkoutData={checkoutData} deals={deals} />

        <View
          style={{
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomWidth: 2,
            borderColor: theme.gray.light2,
            backgroundColor: "white",
          }}
        >
          <FlatList
            style={{ width: "100%" }}
            data={servicesByCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => console.log("touch")}
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    marginRight:
                      servicesByCategory.length - 1 === index ? 0 : 25,
                  }}
                  // underlayColor={theme.primary.lightColor}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    {item.categoryName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            width: "100%",
            // marginTop: 10,
            // backgroundColor: "pink",
            paddingLeft: 15,
            paddingRight: 15,
          }}
          // onLayout={measureView}
        >
          <View
            style={{
              marginTop: 10,
            }}
            // ref={firstViewRef}
            // ref={el => viewRefs.current[0]}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
              
            // ref={categeroyRef}
            >
              Cleaning
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
              
          // ref={(element) => itemEls.current.push(element)}
            >
              Cleaning parts
            </Text>

            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Cleaning small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Another description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Cleaning small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Another description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
          </View>


          <View
            style={{
              marginTop: 10
            }}
            // ref={(el) => viewRefs.current[1]}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Repair
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
            >
              Repair
            </Text>

            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Repair small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Another description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Repair small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Repair description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Repair small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Repair description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                borderBottomWidth: 2,
                borderColor: theme.gray.light2
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Repair small part of unit 1
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: theme.gray.light3,
                }}
              >
                Repair description for the item
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  marginTop: 10,
                }}
              >
                from 150.00
              </Text>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
            backgroundColor: "brown",
          }}
        ></View>
        <View
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
            backgroundColor: "skyblue",
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
            backgroundColor: "red",
          }}
        ></View>
        <View
          style={{
            width: "100%",
            height: 200,
            marginTop: 10,
            backgroundColor: "skyblue",
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
        ></View> */}
      </ScrollView>
      <Button title="Scroll to 300 pixels" onPress={handleScroll} />
    </SafeAreaView>
  );
};

export default Checkout;
