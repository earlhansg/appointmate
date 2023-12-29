import React, { useRef } from "react";
import { SafeAreaView, Animated } from "react-native";
import Header from "../../components/Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../../components/Categories/Categories";
import Deals from "../../components/Deals/Deals";
import TopFreelancers from "../../components/TopFreelancers/TopFreelancers";
import TopShops from "../../components/TopShops/TopShops";
import Membership from "../../components/Membership/Membership";
import Location from "../../components/Header/Location/Location";
import { Navigation } from "../model/Navigation";
import ThemeContextProvider from "../../components/ThemeContext/ThemeContext";

const Home = ({ navigation }: Navigation) => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={HomeStyle.container}>
      <ThemeContextProvider>
        <Header animHeaderValue={scrollOffsetY}>
          <Location navigation={navigation} />
        </Header>
        <Animated.ScrollView
          scrollEventThrottle={16}
          contentInsetAdjustmentBehavior="automatic"
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false }
          )}
        >
          <Categories navigation={navigation}/>
          <TopFreelancers />
          <TopShops />
          <Deals />
          <Membership />
        </Animated.ScrollView>
      </ThemeContextProvider>
    </SafeAreaView>
  );
};

export default Home;
