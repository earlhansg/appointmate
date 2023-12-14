import React, { useContext } from "react";
import { View, TouchableHighlight } from "react-native";
import TouchableImageButton from "../Buttons/TouchableImageButton";
import Pro from "./Pro/Pro";
import { MembershipStyle } from "./MembershipStyle";
import { ThemeContext } from "../ThemeContext/ThemeContext";

const Membership = () => {
  const appTheme =  useContext(ThemeContext)
  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <View>
      <TouchableImageButton
        renderImage={(settings) => (
          <TouchableHighlight
            style={[MembershipStyle.imageButton, {backgroundColor: appTheme.primary.color}]}
            underlayColor={settings.underlayColor}
            onPress={navigate}
          >
            <>
              <Pro/>
            </>
          </TouchableHighlight>
        )}
      ></TouchableImageButton>
    </View>
  );
};

export default Membership;
