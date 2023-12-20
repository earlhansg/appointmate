import React, { useContext } from "react";
import { View } from "react-native";
import InfoList from "./InfoList/InfoList";
import { UserStyle } from "./UserStyle";
import { TouchableHighlight } from "react-native-gesture-handler";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const User = () => {
  const theme = useContext(ThemeContext);

  const user = {
    firstName: "Earl Hans",
    lastName: "Genoso",
    email: "earl@test.com",
    mobileNumber:"091234567890"
  }

  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light}
        onPress={navigate}
      >
        <InfoList label="Name" value={`${user.firstName} ${user.lastName}`}/>
      </TouchableHighlight>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light}
        onPress={navigate}
      >
        <InfoList label="Email" value={user.email}/>
      </TouchableHighlight>
      <TouchableHighlight
        style={UserStyle.container}
        underlayColor={theme.gray.light}
        onPress={navigate}
      >
        <InfoList label="Mobile number" value={user.mobileNumber}/>
      </TouchableHighlight>
    </>
  );
};

export default User;
