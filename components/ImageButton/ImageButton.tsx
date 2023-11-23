import React, { useState } from "react";
import { Pressable, Image, Text } from "react-native";

const imageUrl = require("../../assets/sampleimage2.png");

type ImageButtonProps = {
    containerSyle?: any,
    handleClick?: ({ isClick }: { isClick: boolean }) => void | any,
    children?: React.ReactNode
}

const ImageButton = ({containerSyle, handleClick, children}: ImageButtonProps) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Pressable style={{...containerSyle}} onPress={() =>setIsClick(!isClick)}>
        <Image source={imageUrl} resizeMode="contain" style={{ width: "100%", height: "100%" }}/>
        { handleClick && handleClick({isClick}) }
        {children}
    </Pressable>
  )
  
};

export default ImageButton;
