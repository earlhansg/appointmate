import React from "react";

import { View, Text, TouchableHighlight, Image, FlatList } from "react-native";

import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { AntDesign } from "@expo/vector-icons";
import { ShopDealsStyle } from "./ShopDealsStyle";

type ShopDeal = {
  id: number;
  imageUrl: any;
  name: string;
  position: string;
  address: string;
};

const ShopDeals = ({ shopDeals }: { shopDeals: ShopDeal[] }) => {
  const navigate = () => {
    console.log("im click in Try");
  };
  const keyExtractor = (item: ShopDeal) => item.id.toString();
  return (
    <>
      <FlatList
        data={shopDeals}
        renderItem={({ item }) => (
          <TouchableImageButton
            key={item.id}
            renderImage={(settings) => (
              <TouchableHighlight
                style={[ShopDealsStyle.imageButton]}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                <View style={ShopDealsStyle.ImageButtonContainer}>
                  <Image
                    source={item.imageUrl}
                    resizeMode="cover"
                    style={ShopDealsStyle.contentImage}
                  />
                  <View style={ShopDealsStyle.textContainer}>
                    <View style={ShopDealsStyle.primaryTextContainer}>
                      <Text style={ShopDealsStyle.shopNameText}>
                        {item.name}
                      </Text>
                      <Text style={ShopDealsStyle.shopAddressTest}>
                        {item.address}
                      </Text>
                    </View>
                    <View style={ShopDealsStyle.reviewContainer}>
                      <AntDesign
                        name="star"
                        size={12}
                        color="#ffb413"
                        style={{
                          margin: 2,
                        }}
                      />
                      <Text style={ShopDealsStyle.reviewText}>4.6</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          ></TouchableImageButton>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default ShopDeals;
