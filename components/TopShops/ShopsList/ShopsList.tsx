import React from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { ShopListStyle } from "./ShopsStyle";
import { TopItem } from "../../Top/Top";

const ShopsList = ({ shop }: { shop: TopItem }) => {
  const navigate = () => {
    console.log("im click in Try");
  };
  return (
    <View style={ShopListStyle.container}>
      <TouchableImageButton
        key={shop.id}
        renderImage={(settings) => (
          <TouchableHighlight
            style={[
              {
                height: 85,
                width: 90,
                marginTop: 5,
                borderRadius: 10,
              },
              {
                marginLeft: shop.id === 1 ? 0 : 3,
                marginRight: shop.id === 5 ? 5 : 0,
              },
            ]}
            underlayColor={settings.underlayColor}
            onPress={navigate}
          >
            <Image
              source={shop.imageUrl}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", borderRadius: 10 }}
            />
          </TouchableHighlight>
        )}
      ></TouchableImageButton>
      <View style={[ShopListStyle.textContainer]}>
        <Text style={ShopListStyle.text}>{shop.name}</Text>
      </View>
    </View>
  );
};

export default ShopsList;
