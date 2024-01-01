import React, { useContext } from "react";

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  FlatList,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";

import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { AntDesign } from "@expo/vector-icons";
import { ShopDealsStyle } from "./ShopDealsStyle";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { ShopDeal } from "../model/ShopDeal";
import { NavigationContext } from "../../NavigationContext/NavigationContext";
import { Shop } from "../../TopShops/model/Shop";


type ShopDealProps = {
  shopDeals: Shop[];
  showInHorizontal: boolean;
  verticalStyles?: {
    imageButton?: StyleProp<ViewStyle>;
    imageButtonContainer?: StyleProp<ViewStyle>;
    contentImage?: StyleProp<ImageStyle>;
    shopNameText?: StyleProp<TextStyle>;
    reviewText?: StyleProp<TextStyle>;
    promoContainer?: StyleProp<TextStyle>;
  };
};

const ShopDeals = ({
  shopDeals,
  showInHorizontal,
  verticalStyles,
}: ShopDealProps) => {
  const appTheme = useContext(ThemeContext);
  const screen = useContext(NavigationContext);
  const keyExtractor = (item: Shop) => item.id.toString();
  return (
    <>
      <FlatList
        data={shopDeals}
        renderItem={({ item }) => (
          <TouchableImageButton
            key={item.id}
            renderImage={(settings) => (
              <TouchableHighlight
                style={
                  showInHorizontal
                    ? ShopDealsStyle.imageButton
                    : verticalStyles?.imageButton
                }
                underlayColor={showInHorizontal ? settings.underlayColor : ''}
                onPress={() => screen?.navigate(item)}
              >
                <View
                  style={
                    showInHorizontal
                      ? ShopDealsStyle.ImageButtonContainer
                      : verticalStyles?.imageButtonContainer
                  }
                >
                  <View
                    style={[
                      {
                        backgroundColor: appTheme.primary.color,
                      },
                      showInHorizontal
                      ? ShopDealsStyle.promoContainer
                      : verticalStyles?.promoContainer
                    ]}
                  >
                    <Text style={ShopDealsStyle.promoText}>20% off</Text>
                  </View>

                  <Image
                    source={item.imageUrl}
                    resizeMode="cover"
                    style={
                      showInHorizontal
                        ? ShopDealsStyle.contentImage
                        : verticalStyles?.contentImage
                    }
                  />

                  <View style={ShopDealsStyle.textContainer}>
                    <View style={ShopDealsStyle.primaryTextContainer}>
                      <Text
                        style={
                          showInHorizontal
                            ? ShopDealsStyle.shopNameText
                            : verticalStyles?.shopNameText
                        }
                      >
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
                          margin: showInHorizontal ? 2 : 3,
                        }}
                      />
                      <Text
                        style={
                          showInHorizontal
                            ? ShopDealsStyle.reviewText
                            : verticalStyles?.reviewText
                        }
                      >
                        4.6
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          ></TouchableImageButton>
        )}
        keyExtractor={keyExtractor}
        horizontal={showInHorizontal}
        showsHorizontalScrollIndicator={!showInHorizontal}
        showsVerticalScrollIndicator={showInHorizontal}
      />
    </>
  );
};

export default ShopDeals;
