import React, { useContext } from "react";

import { View, Text, TouchableHighlight, Image, FlatList } from "react-native";

import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { AntDesign } from "@expo/vector-icons";
import { ShopDealsStyle } from "./ShopDealsStyle";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { ShopDeal } from "../model/ShopDeal";

const ShopDeals = ({ shopDeals }: { shopDeals: ShopDeal[] }) => {
  const appTheme =  useContext(ThemeContext)
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
                  
                  <View style={[{
                    backgroundColor: appTheme.secondary.color,
                    },
                    ShopDealsStyle.promoContainer
                    ]}>
                    <Text style={ShopDealsStyle.promoText}>20% off</Text>
                  </View>

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
