import React, { ReactNode, ReactElement } from "react";

import { ViewStyle } from "react-native";

type ImageProps = {
  containerStyle?: ViewStyle;
  underlayColor: string;
};

type TouchableImageButtonProps = {
  children?: ReactNode;
  imageUrl?: any;
  renderImage: (settings: {
    containerStyle: ViewStyle;
    underlayColor: string;
  }) => ReactElement<ImageProps>;
};

const TouchableImageButton = ({ children, renderImage }: TouchableImageButtonProps) => {
  const image = renderImage({
    containerStyle: {
      backgroundColor: "#f7f7f7",
      height: 60,
      width: 65,
      marginTop: 5,
      marginLeft: 10,
      marginBottom: 5,
      borderRadius: 10,
    },
    underlayColor: "#e0e0e0"
  });
  return (
    <>
      {image}
      {children}
    </>
  );
};

export default TouchableImageButton;
