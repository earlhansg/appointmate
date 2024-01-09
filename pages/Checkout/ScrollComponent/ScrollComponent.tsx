import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../../../components/ThemeContext/ThemeContext'
import { Category } from '../Checkout';


type Service = {
    id: number;
    serviceName: string;
    price: number;
  };
  
  type ServicesByCategory = {
    id: number;
    categoryName: string;
    services: Service[];
  };

type ScrollComponentProps = {
    servicesByCategory: ServicesByCategory[],
    checkoutDetails: ReactElement,
    children: ReactElement[]
}

const ScrollComponent = ({servicesByCategory, checkoutDetails, children} : ScrollComponentProps) => {
  const theme = useContext(ThemeContext);

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
    <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {/* <CheckoutDetails checkoutData={checkoutData} deals={deals} /> */}
        {checkoutDetails}
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
        </View>
        {children}
    </ScrollView>
  )
}

export default ScrollComponent
