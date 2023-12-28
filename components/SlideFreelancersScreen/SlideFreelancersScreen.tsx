import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SlideFreelancersScreenStyle } from './SlideFreelancersScreenStyle'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import FavouriteFreelancerList from './FavouriteFreelancerList/FavouriteFreelancerList'

const SlideFreelancersScreen = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{flex: 1}}>
        <View style={SlideFreelancersScreenStyle.sliderContainer}>
          <FavouriteFreelancerList/>
        </View>
    </View>
  )
}

export default SlideFreelancersScreen
