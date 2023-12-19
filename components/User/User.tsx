import React from "react";
import { View } from "react-native";
import InfoList from "./InfoList/InfoList";
import { UserStyle } from "./UserStyle";

const User = () => {
  return (
    <View style={UserStyle.container}>
        <InfoList />
    </View>
  )
}

export default User
