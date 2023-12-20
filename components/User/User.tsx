import React, { useContext } from "react";
import { View } from "react-native";
import InfoList from "./InfoList/InfoList";
import { UserStyle } from "./UserStyle";
import { TouchableHighlight } from "react-native-gesture-handler";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const User = () => {
  const theme = useContext(ThemeContext);

  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <TouchableHighlight style={UserStyle.container} underlayColor={theme.gray.light} onPress={navigate}>
      <InfoList />
    </TouchableHighlight>
  )
}

export default User
