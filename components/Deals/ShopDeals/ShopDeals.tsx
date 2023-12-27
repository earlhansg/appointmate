import React, { useContext } from "react";

import { View, Text, TouchableHighlight, Image, FlatList } from "react-native";

import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { AntDesign } from "@expo/vector-icons";
import { ShopDealsStyle } from "./ShopDealsStyle";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { ShopDeal } from "../model/ShopDeal";
import { theme } from "../../ThemeContext/theme";

type ShopDealProps = {
  shopDeals: ShopDeal[];
  showInHorizontal: boolean
}

// const ShopDeals = ({ shopDeals }: { shopDeals: ShopDeal[] }) => {
const ShopDeals = ({ shopDeals, showInHorizontal }: ShopDealProps) => {
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

              // orginal
              // <TouchableHighlight
              //   // style={[ShopDealsStyle.imageButton]}
              //   style={[ShopDealsStyle.imageButton,
              //   {
              //     margin: 0,
              //     padding: 0,
              //     width: "100%",
              //     borderRadius: 0
              //   }]}
              //   underlayColor={settings.underlayColor}
              //   onPress={navigate}
              // >

              <TouchableHighlight
                // style={[ShopDealsStyle.imageButton]}
                style={showInHorizontal ? ShopDealsStyle.imageButton : {
                  margin: 0,
                  padding: 0,
                  maxHeight: 210,
                  width: 280,
                  borderRadius: 0
                }}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                {/* <View style={ShopDealsStyle.ImageButtonContainer}> */}
                {/* <View style={[ShopDealsStyle.ImageButtonContainer, 
                {
                  width: "100%",
                  height: "90%",
                  margin: 0,
                  padding: 0
                }]}> */}
                <View style={ShopDealsStyle.ImageButtonContainer}>
                  
                  <View style={[{
                    backgroundColor: appTheme.primary.color,
                    },
                    ShopDealsStyle.promoContainer
                    ]}>
                    <Text style={ShopDealsStyle.promoText}>20% off</Text>
                  </View>

                  {/* <Image
                    source={item.imageUrl}
                    resizeMode="cover"
                    // style={ShopDealsStyle.contentImage}
                    style={[ShopDealsStyle.contentImage, {
                      borderRadius: 0
                    }]}
                  /> */}

                  <Image
                    source={item.imageUrl}
                    resizeMode="cover"
                    // style={ShopDealsStyle.contentImage}
                    style={showInHorizontal ? ShopDealsStyle.contentImage : {
                      borderRadius: 0
                    }}
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
        // horizontal
        // showsHorizontalScrollIndicator={false}
        horizontal={showInHorizontal}
        showsHorizontalScrollIndicator={showInHorizontal}
        showsVerticalScrollIndicator={showInHorizontal}
      />
    </>
  );
};

export default ShopDeals;
