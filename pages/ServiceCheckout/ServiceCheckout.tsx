import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
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
  
  return (
    <SafeAreaView style={ServiceCheckoutStyle.container}>
        <View style={ServiceCheckoutStyle.headerContainer}>
          <View style={ServiceCheckoutStyle.headerIconContainer}>
            <ButtonIcon
              renderIcon={(settings) => (
                <Entypo name="cross" color={theme.primary.color} size={20} />
              )}
              // onClick={handleClickMenuBar}
              onClick={() => navigation?.navigate("Checkout", {checkoutData})}
            />
          </View>
          {/* <Text style={ServiceCheckoutStyle.headerText}>{name}</Text> */}
        </View>
      </SafeAreaView>
  )
}

export default ServiceCheckout
