import React, { useContext } from 'react'
import { Pressable, Text, View } from "react-native";
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { Navigation } from '../../pages/model/Navigation';
import { ShopDeal } from '../Deals/model/ShopDeal';
import ShopDeals from '../Deals/ShopDeals/ShopDeals';

type SlideShopsScreenProps = {
    navigation?: Navigation;
    shopDeals: ShopDeal[];
}

const SlideShopsScreen = ({ navigation, shopDeals }: SlideShopsScreenProps) => {
const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          // backgroundColor: "red",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 15,
          paddingBottom: 10,
          gap: 10
        }}
      >
        <Pressable
          style={[
            {
              backgroundColor: theme.primary.color,
            },
            {
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 25
            },
          ]}
        >
          <Text
            style={[
              { color: theme.white.color },
              {
                fontWeight: "500",
                fontSize: 13,
              },
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
            {
              alignItems: "center",
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 25
            },
          ]}
        >
          <Text
            style={[
              { color: theme.black.dark },
              {
                fontWeight: "500",
                fontSize: 13,
              },
            ]}
          >
            Walk In
          </Text>
        </Pressable>
      </View>
      <View>
          <ShopDeals shopDeals={shopDeals} showInHorizontal={false}/>
      </View>
    </View>
  )
}

export default SlideShopsScreen
