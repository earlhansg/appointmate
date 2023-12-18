import React, { ReactElement, ReactNode, useState } from "react";
import { Pressable } from "react-native";

export type IconProps = {
  isClicked?: boolean;
};

type ButtonIconProps = {
  children?: ReactNode;
  renderIcon: (settings: { isClicked: boolean }) => ReactElement<IconProps>;
  onClick?: () => void;
};

export const ButtonIcon = ({
  children,
  renderIcon,
  onClick,
}: ButtonIconProps) => {
  const [onPress, setOnPress] = useState(false);

  const handlePressOut = () => {
    setOnPress(false);
    onClick && onClick();
  };

  const icon = renderIcon({
    isClicked: onPress,
  });

  return (
    <Pressable onPressIn={() => setOnPress(true)} onPressOut={handlePressOut}>
      {icon}
    </Pressable>
  );
};

export default ButtonIcon;
