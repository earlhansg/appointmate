import React, { useState } from "react";
import {
  Image,
  TouchableHighlight,
} from "react-native";

const imageUrl = require("../../assets/sampleimage2.png");

type ImageButtonProps = {
  containerStyle?: any;
  backgroundColorActive?: string;
  handleClick?: ({ onPress }: { onPress: boolean | null }) => void | any;
  children?: React.ReactNode;
};

const ImageButton = ({
  containerStyle,
  backgroundColorActive = "#e0e0e0",
  handleClick,
  children,
}: ImageButtonProps) => {
  const [onClick, setOnClick] = useState(false);

  const handlePress = () => {
    setOnClick(!onClick);
  };

  return (
    <>
      <TouchableHighlight
        style={[{ ...containerStyle }]}
        underlayColor={backgroundColorActive}
        onPress={handlePress}
      >
        <Image
          source={imageUrl}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableHighlight>
      {handleClick && handleClick({ onPress: onClick })}
      {children}
    </>
  );
};

export default ImageButton;
