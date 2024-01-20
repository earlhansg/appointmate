import React, { useContext } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ButtonIcon from '../../components/Buttons/ButtonIcon'

import { Entypo, MaterialIcons  } from "@expo/vector-icons";
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

          <View style={{margin: 10, padding: 10, borderTopWidth: 1, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: theme.gray.light1, borderRadius: 10, }}>
            <Text style={{
              fontSize: 14,
              fontWeight: "500"
            }}>Service Options</Text>
            <View style={{
              paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, borderWidth: 2, borderColor: theme.primary.color, borderRadius: 10, marginTop: 10
            }}>
              <Text style={{
                fontSize: 12,
                fontWeight: "500"
              }}>Home Service</Text>
            </View>
            <View style={{
              paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, borderWidth: 2, borderColor: theme.gray.light1, borderRadius: 10, marginTop: 10
            }}>
              <Text style={{
                fontSize: 12,
                fontWeight: "500"
              }}>In Shop</Text>
            </View>
          </View>

          <View style={{margin: 10, padding: 10, borderTopWidth: 1, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 2, borderColor: theme.gray.light1, borderRadius: 10, }}>
            <View style={{flexDirection:"row", gap: 7}}>
              <MaterialIcons name="payment" 
              size={20} color={theme.primary.color} />
              <Text style={{
                fontSize: 14,
                fontWeight: "500"
              }}>Payment method</Text>
            </View>
            <View style={{flexDirection:"row", gap: 5, marginTop: 10}}>
              <Entypo name="plus" 
              size={20} color={theme.primary.color} />
              <Text style={{
                fontSize: 12,
                fontWeight: "500",
                alignSelf:"center",
                color: theme.primary.color
              }}>Add a payment method</Text>
            </View>
          </View>

        </View>

      </SafeAreaView>
  )
}

export default ServiceCheckout
