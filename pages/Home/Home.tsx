import React, { useRef } from "react";
import { SafeAreaView, Animated } from "react-native";
import Header from "../../components/Header/Header";
import { HomeStyle } from "./HomeStyle";
import Categories from "../../components/Categories/Categories";
import Deals from "../../components/Deals/Deals";
import TopFreelancers from "../../components/TopFreelancers/TopFreelancers";
import TopShops from "../../components/TopShops/TopShops";
import Membership from "../../components/Membership/Membership";

const Home = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={HomeStyle.container}>
      <Header animHeaderValue={scrollOffsetY} />
      <Animated.ScrollView
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="automatic"
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <Categories />
        <TopFreelancers />
        <TopShops />
        <Deals />
        <Membership />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default Home;
