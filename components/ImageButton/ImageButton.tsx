import React, { useState } from "react";
import { Pressable, Image, Text } from "react-native";

const imageUrl = require("../../assets/sampleimage2.png");

type ImageButtonProps = {
  containerStyle?: any;
  handleClick?: ({ isClick }: { isClick: boolean }) => void | any;
  children?: React.ReactNode;
};

const ImageButton = ({
  containerStyle,
  handleClick,
  children,
}: ImageButtonProps) => {
  const [isClick, setIsClick] = useState(false);
  const { backgroundColor } = containerStyle;
  const [onPressIn, setOnPressIn] = useState<boolean | null>(null);

  const handlePress = () => {
    setIsClick(!isClick);
    if (handleClick) {
      handleClick({ isClick: !isClick });
    }
  };

  const handlePressIn = () => {
    setOnPressIn(true);
  };

  const handlePressOut = () => {
    setOnPressIn(false);
  };

  return (
    <Pressable
      style={[
        { ...containerStyle },
        { backgroundColor: onPressIn ? "#e0e0e0" : backgroundColor },
      ]}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Image
        source={imageUrl}
        resizeMode="contain"
        style={{ width: "100%", height: "100%" }}
      />
      {handleClick && handleClick({ isClick })}
      {children}
    </Pressable>
  );
};

export default ImageButton;
