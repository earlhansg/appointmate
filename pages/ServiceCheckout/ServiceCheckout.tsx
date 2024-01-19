import React, { useContext } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ButtonIcon from '../../components/Buttons/ButtonIcon'

import { Entypo } from "@expo/vector-icons";
import { ServiceCheckoutStyle } from './ServiceCheckoutStyle';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import { Navigation, ServiceCheckoutData } from '../model/Navigation';

import { useRoute, RouteProp } from "@react-navigation/native";

type ServiceRouteProps = {
  route: RouteProp<
    {
      ServiceCheckout: ServiceCheckoutData;
    },
    "ServiceCheckout"
  >;
};

const ServiceCheckout = ({ navigation }: Navigation) => {
  const theme = useContext(ThemeContext);

  const route = useRoute<ServiceRouteProps["route"]>();
  const { checkoutData, serviceCheckoutData } = route.params || { data: {} };

  const aircon = require("../../assets/checkout-images/air-conditioner-3.png");
  
  return (
    <SafeAreaView style={ServiceCheckoutStyle.container}>
        <View style={ServiceCheckoutStyle.headerContainer}>
          <View style={ServiceCheckoutStyle.headerIconContainer}>
            <Image
                source={aircon}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: 170
                }}
            />
            <View style={{
              position: "absolute",
              top: 25,
              left: 10
            }}>
              <ButtonIcon
                renderIcon={(settings) => (
                  <Entypo name="cross" color={theme.primary.color} size={20} />
                )}
                // onClick={handleClickMenuBar}
                onClick={() => navigation?.navigate("Checkout", {checkoutData})}
              />
            </View>
          </View>
          {/* <Text style={ServiceCheckoutStyle.headerText}>Test</Text> */}
          <View style={{padding:10, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: "#e0e0e0", flexDirection:"row"}}>
            
            <View style={{
              width: 270
            }}>
              <Text style={{fontSize:20, fontWeight: "500"}}>Cleaning 1</Text>
              <Text style={{marginTop: 5, fontSize:13, color: theme.gray.light3}}>Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1 Cleaning 1</Text>
            </View>
            <Text style={{flex: 1, 
            textAlign: "center", marginTop: 10, fontSize:13, fontWeight: "500"}}>156.00</Text>
          </View>
        </View>
      </SafeAreaView>
  )
}

export default ServiceCheckout
