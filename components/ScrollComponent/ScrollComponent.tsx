import React, { ReactElement, useContext, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { Category } from "../../pages/Checkout/Checkout";
import { ServicesByCategory } from "./model/ServicesByCategory";
import { ScrollComponentStyle } from "./ScrollComponentStyle";

type ScrollComponentProps = {
  servicesByCategory: ServicesByCategory[];
  checkoutDetails: ReactElement;
  categoryHeights: Category[];
  children: ReactElement;
};

const ScrollComponent = ({
  servicesByCategory,
  checkoutDetails,
  categoryHeights,
  children,
}: ScrollComponentProps) => {
  const theme = useContext(ThemeContext);

  console.log('ScrollComponent')

  const scrollViewRef = useRef<ScrollView>(null);
  const flatListRef = useRef<FlatList | null>(null);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleClickScroll = (id: number) => {
    const previousHeights = categoryHeights.slice(
      0,
      categoryHeights.findIndex((item) => item.categoryId === id)
    );
    const defaultHeight = id !== 1 ? 255 + 7 * id : 255;
    const totalHeight = previousHeights.reduce(
      (sum, h) => sum + h.height,
      defaultHeight
    );

    scrollViewRef.current?.scrollTo({ y: totalHeight, animated: true });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset } = event.nativeEvent;
    const currentY = contentOffset.y;

    // Find the index of the first item whose height, when summed with previous items, exceeds the current scroll position
    const currentIndex = categoryHeights.findIndex((item, index) => {
      const previousHeights = categoryHeights.slice(0, index);
      const totalHeight = previousHeights.reduce(
        (sum, h) => sum + h.height,
        265
      );
      return totalHeight > currentY;
    });

    // Update scroll position if index is valid
    if (currentIndex > 0) {
      setScrollPosition(currentIndex);
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex - 1,
      });
    }
  };

  return (
    <ScrollView
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {checkoutDetails}
      <View
        style={[
          {
            borderColor: theme.gray.light2,
          },
          ScrollComponentStyle.flatListContainer,
        ]}
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
                style={[
                  {
                    marginRight:
                      servicesByCategory.length - 1 === index ? 0 : 25,
                    borderBottomWidth: item.id === scrollPosition ? 2 : 0,
                    borderColor:
                      item.id === scrollPosition ? theme.primary.color : "",
                  },
                  ScrollComponentStyle.touchableOpacityContainer,
                ]}
              >
                <Text
                  style={[
                    {
                      color:
                        item.id === scrollPosition
                          ? theme.primary.color
                          : theme.black.dark,
                    },
                    ScrollComponentStyle.categoryNameText,
                  ]}
                >
                  {item.categoryName}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {children}
    </ScrollView>
  );
};

export default ScrollComponent;
