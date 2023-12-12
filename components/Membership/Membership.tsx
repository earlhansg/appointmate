import React from "react";
import { View, TouchableHighlight } from "react-native";
import TouchableImageButton from "../Buttons/TouchableImageButton";
import Pro from "./Pro/Pro";
import { MembershipStyle } from "./MembershipStyle";

const Membership = () => {
  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <View style={{}}>
      <TouchableImageButton
        renderImage={(settings) => (
          <TouchableHighlight
            style={MembershipStyle.imageButton}
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
