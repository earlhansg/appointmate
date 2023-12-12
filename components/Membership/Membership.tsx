import React from 'react'
import { View, Text, TouchableHighlight } from "react-native";
import TouchableImageButton from '../Buttons/TouchableImageButton';

const Membership = () => {
    const navigate = () => {
        console.log("im click in Try");
      };
  return (
    <View style={{}}>
        {/* <View style={{
            padding: 15,
            margin: 10,
            borderRadius: 10,
            borderColor: "#e0e0e0",
            borderWidth: 1.5
        }}>
            <Text style={{
                fontSize: 17,
                fontWeight: "600"
            }}>Become a pro</Text>
            <Text style={{
                fontSize: 12,
                marginTop: 5
            }}>you can reserve asap & more</Text>
        </View> */}
        <TouchableImageButton
            renderImage={(settings) => (
              <TouchableHighlight
                style={{
                    padding: 15,
                    margin: 10,
                    borderRadius: 10,
                    borderColor: "#e0e0e0",
                    borderWidth: 1.5
                }}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                <>
                        <Text style={{
                        fontSize: 17,
                        fontWeight: "600"
                    }}>Become a pro</Text>
                    <Text style={{
                        fontSize: 12,
                        marginTop: 5
                    }}>you can reserve asap & more</Text>
                </>
              </TouchableHighlight>
            )}
          ></TouchableImageButton>
    </View>
  )
}

export default Membership
