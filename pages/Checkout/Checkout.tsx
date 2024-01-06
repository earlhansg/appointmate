import React, {
  ReactElement,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  ElementRef,
  Children,
  useLayoutEffect,
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

// type Category = {
//   categoryId: number;
//   height: number;
// };

type Category = {
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
        // heights.push({ categoryId: i, height });
        heights.push({ categoryId: i, height, pageActive: false})
      });
    });
    setCategoryHeights(heights);
    console.log("categoryHeights", categoryHeights);
  };

  const handleScroll = (id: number) => {
    // const distanceY = categoryHeights
    //   .filter((curr) => curr.categoryId < id)
    //   .reduce((acc, curr) => acc + curr.height + 10, 0);
    // console.log("distanceY", distanceY);
    // scrollViewRef.current?.scrollTo({ y: 255 + distanceY, animated: true });

    const initializeActivePage = categoryHeights.map((value) => {
      const pageActive = value.categoryId !== undefined ? value.categoryId === id : false;
      
      return {
        ...value,
        pageActive
      };
    });

    setCategoryHeights(initializeActivePage)

    const distanceY = categoryHeights
      .filter((curr) => curr.categoryId < id)
      .reduce((acc, curr) => acc + curr.height + 10, 0);
    scrollViewRef.current?.scrollTo({ y: 255 + distanceY, animated: true });
  };

  // const checkActiveBorder = (id: number) => {
  //   return categoryHeights.filter(({categoryId}) => categoryId === id)[0];
  // }

  const matchingCategory = (id: number) => categoryHeights.filter(({ categoryId }) => categoryId === id)[0];

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
        ref={scrollViewRef}>
        <CheckoutDetails checkoutData={checkoutData} deals={deals}/>
        <View
          style={{
            marginTop: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderBottomWidth: 1,
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
                  onPress={() => handleScroll(index)}
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    marginRight: servicesByCategory.length - 1 === index ? 0 : 25,
                    // borderBottomWidth: 2,
                    borderBottomWidth: matchingCategory(index) && matchingCategory(index).pageActive ? 2 : 0,
                    borderColor: matchingCategory(index) && matchingCategory(index).pageActive ? theme.primary.color : ""
                  }}>
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
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View
            style={{
              marginTop: 10,
            }}
            ref={(el) => (categoryRefs.current[0] = el)}
            onLayout={getHeight}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Cleaning
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
            >
              Cleaning parts
            </Text>

            <View
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
                borderColor: theme.gray.light2,
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
              marginTop: 10,
            }}
            ref={(el) => (categoryRefs.current[1] = el)}
            onLayout={getHeight}
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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

          <View
            style={{
              marginTop: 10,
            }}
            ref={(el) => (categoryRefs.current[2] = el)}
            onLayout={getHeight}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Dessemble
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
            >
              install
            </Text>

            <View
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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



          <View
            style={{
              marginTop: 10,
            }}
            ref={(el) => (categoryRefs.current[3] = el)}
            onLayout={getHeight}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Installation
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
            >
              Special Offer
            </Text>

            <View
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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
                borderColor: theme.gray.light2,
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
      </ScrollView>
      {/* <Button title="Scroll to 300 pixels" onPress={() => handleScroll(2)} /> */}
    </SafeAreaView>
  );
};

export default Checkout;
