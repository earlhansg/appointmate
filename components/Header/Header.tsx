import React, { ReactElement, useEffect, useState } from "react";
import { Animated } from "react-native";
import Location from "./Location/Location";
import Search from "./Search/Search";

const Header_Max_Height = 120;
const Header_Min_Height = 60;

interface DynamicHeaderProps {
  animHeaderValue: Animated.Value;
  children: ReactElement
}

const Header = ({ animHeaderValue, children }: DynamicHeaderProps) => {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const [scrollValue, setScrollValue] = useState<number>(0);

  // Example: Attach the Animated.Value to a ScrollView
  useEffect(() => {
    const scrollListener = animHeaderValue.addListener(({ value }) => {
      // Access the current value of scrollOffsetY here
      setScrollValue(value);
    });

    // Clean up the listener when the component is unmounted
    return () => {
      animHeaderValue.removeListener(scrollListener);
    };
  }, [animHeaderValue]);

  return (
    <Animated.View
      style={[
        {
          height: animateHeaderHeight
        },
      ]}
    >
      {children}
      {scrollValue < 20 && <Search />}
    </Animated.View>
  );
};

export default Header;
