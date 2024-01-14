import React, { useContext } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ButtonIcon from '../../components/Buttons/ButtonIcon'

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ServiceCheckoutStyle } from './ServiceCheckoutStyle';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';

const ServiceCheckout = () => {
  const theme = useContext(ThemeContext);
  return (
    <SafeAreaView style={ServiceCheckoutStyle.container}>
        <View style={ServiceCheckoutStyle.headerContainer}>
          <View style={ServiceCheckoutStyle.headerIconContainer}>
            <ButtonIcon
              renderIcon={(settings) => (
                <MaterialCommunityIcons
                  name="arrow-left"
                  color={theme.primary.color}
                  size={20}
                />
              )}
              // onClick={handleClickMenuBar}
            />
          </View>
          {/* <Text style={ServiceCheckoutStyle.headerText}>{name}</Text> */}
        </View>
      </SafeAreaView>
  )
}

export default ServiceCheckout
