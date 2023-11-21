import React from 'react'
import { View, Text } from 'react-native'

import { Entypo } from '@expo/vector-icons';
import { ServiceStyle } from './ServiceStyle';
import { Ionicons } from '@expo/vector-icons';

const Service = () => {
  return (
    <View style={ServiceStyle.container}>
        <View style={ServiceStyle.iconContainer}>
            <Ionicons name="people" size={18} style={ServiceStyle.icon}/>
            <Text style={ServiceStyle.text}>Freelancer</Text>
        </View>
        <View style={ServiceStyle.iconContainer}>
            <Entypo name="shop" size={18} color="black" />
            <Text>Shop</Text>
        </View>
    </View>
  )
}

export default Service
