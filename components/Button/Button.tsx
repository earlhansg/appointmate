import React from "react";
import {
  Text,
  Pressable,
  StyleSheet
} from "react-native";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

export enum IconType {
  MaterialIcon,
  FontAwesomeIcon,
  Ionicon,
}

type ButtonProps = {
  icon?:
    | {
        type: IconType.MaterialIcon;
        name: keyof typeof MaterialIcons.glyphMap;
      }
    | {
        type: IconType.FontAwesomeIcon;
        name: keyof typeof FontAwesome.glyphMap;
      }
    | {
        type: IconType.Ionicon;
        name: keyof typeof Ionicons.glyphMap;
      };
  size?: number;
  text?: string;
  customStyle?: any;
};

const CustomButton = ({ icon, size, text, customStyle }: ButtonProps) => {
  const style = StyleSheet.create({ ...customStyle });
  return (
    <Pressable style={style}>
      {icon?.type === IconType.FontAwesomeIcon && (
        <FontAwesome name={icon.name} size={size} />
      )}
      {icon?.type === IconType.MaterialIcon && (
        <MaterialIcons name={icon.name} size={size} />
      )}
      {icon?.type === IconType.Ionicon && (
        <Ionicons name={icon.name} size={size} />
      )}
      <Text>{text}</Text>
    </Pressable>
  );
};

export default CustomButton;
