import React, { useContext } from 'react'
import { Pressable, Text, View } from "react-native";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Navigation } from '../../pages/model/Navigation';
import { ShopDeal } from '../Deals/model/ShopDeal';
import ShopDeals from '../Deals/ShopDeals/ShopDeals';
import { SlideShopsScreenStyle } from './SlideShopsScreenStyle';

type SlideShopsScreenProps = {
    navigation?: Navigation;
    shopDeals: ShopDeal[];
}

const SlideShopsScreen = ({ navigation, shopDeals }: SlideShopsScreenProps) => {
const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={SlideShopsScreenStyle.sliderContainer}
      >
        <Pressable
          style={[
            {
              backgroundColor: theme.primary.color,
            },
            SlideShopsScreenStyle.pressableContainer
          ]}
        >
          <Text
            style={[
              { color: theme.white.color },
              SlideShopsScreenStyle.pressableText
            ]}
          >
            Home Service
          </Text>
        </Pressable>
        <Pressable
          style={[
            {
              backgroundColor: theme.white.color,
              borderColor: theme.gray.light2,
              borderWidth: 1
            },
            SlideShopsScreenStyle.pressableContainer
          ]}
        >
          <Text
            style={[
              { color: theme.black.dark },
              SlideShopsScreenStyle.pressableText
            ]}
          >
            Walk In
          </Text>
        </Pressable>
      </View>
      <View>
          <ShopDeals shopDeals={shopDeals} showInHorizontal={false}
            verticalStyles={{imageButton: SlideShopsScreenStyle.imageButton,
            imageButtonContainer: SlideShopsScreenStyle.imageButtonContainer,
            contentImage: SlideShopsScreenStyle.contentImage,
            shopNameText: SlideShopsScreenStyle.shopNameText,
            reviewText: SlideShopsScreenStyle.reviewText
          }} 
          />
      </View>
    </View>
  )
}

export default SlideShopsScreen
