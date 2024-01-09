import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo
} from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { CheckoutStyle } from "./CheckoutStyle";
import ButtonIcon from "../../components/Buttons/ButtonIcon";
import { CheckoutData, Navigation } from "../model/Navigation";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { useRoute, RouteProp } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckoutDetails from "../../components/CheckoutDetails/CheckoutDetails";
import ScrollComponent from "./ScrollComponent/ScrollComponent";

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
  const flatListRef = useRef<FlatList | null>(null);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

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
        heights.push({ categoryId: i, height, pageActive: false})
      });
    });
    setCategoryHeights(heights);
    console.log("categoryHeights", categoryHeights);
  };

  const handleClickScroll = (id: number) => {

    const previousHeights = categoryHeights.slice(0, categoryHeights.findIndex(item => item.categoryId === id));
    const defaultHeight = id !== 1 ? 255 + (7 * id) : 255;
    const totalHeight = previousHeights.reduce((sum, h) => sum + h.height, defaultHeight);

    scrollViewRef.current?.scrollTo({ y: totalHeight, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const currentY = contentOffset.y;

      // Find the index of the first item whose height, when summed with previous items, exceeds the current scroll position
      const currentIndex = categoryHeights.findIndex((item, index) => {
        const previousHeights = categoryHeights.slice(0, index);
        const totalHeight = previousHeights.reduce((sum, h) => sum + h.height, 265);
        return totalHeight > currentY;
      });

      // Update scroll position if index is valid
      if(currentIndex>0) {
        setScrollPosition(currentIndex);
        flatListRef.current?.scrollToIndex({ animated: true, index: currentIndex - 1 })
      }
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
      {/* <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <CheckoutDetails checkoutData={checkoutData} deals={deals} />
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
            ref={flatListRef}
            data={servicesByCategory}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => handleClickScroll(item.id)}
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    marginRight:
                    servicesByCategory.length - 1 === index ? 0 : 25,
                    borderBottomWidth: item.id === scrollPosition ? 2 : 0,
                    borderColor: item.id === scrollPosition ? theme.primary.color : ""
                  }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: item.id === scrollPosition ? theme.primary.color : theme.black.dark
                    }}
                  >
                    {item.categoryName}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View> */}

        <ScrollComponent servicesByCategory={servicesByCategory} checkoutDetails={<CheckoutDetails checkoutData={checkoutData} deals={deals} />}>

        <View
          style={{
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
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
            marginLeft: 15,
            marginRight: 15,
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
            marginLeft: 15,
            marginRight: 15,
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
            Disassemble
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 5,
            }}
          >
            Disassemble
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
              Disassemble small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Disassemble description for the item
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
              Disassemble small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Disassemble description for the item
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
              Disassemble small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Disassemble description for the item
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
              Disassemble small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Disassemble description for the item
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
            marginLeft: 15,
            marginRight: 15,
          }}
          ref={(el) => (categoryRefs.current[4] = el)}
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
            Installation parts
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
              Installation small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Installation description for the item
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
              Installation small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Installation description for the item
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
            marginLeft: 15,
            marginRight: 15,
          }}
          ref={(el) => (categoryRefs.current[6] = el)}
          onLayout={getHeight}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Troubleshoot Offer
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 5,
            }}
          >
            Installation parts
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
              Troubleshoot small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Troubleshoot description for the item
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
              Troubleshoot small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Troubleshoot description for the item
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
            marginLeft: 15,
            marginRight: 15,
          }}
          ref={(el) => (categoryRefs.current[6] = el)}
          onLayout={getHeight}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Special Offer
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 5,
            }}
          >
            Installation parts
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
              Installation small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Installation description for the item
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
              Installation small part of unit 1
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: theme.gray.light3,
              }}
            >
              Installation description for the item
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

      </ScrollComponent>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Checkout;
