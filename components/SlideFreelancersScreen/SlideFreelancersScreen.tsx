import React, { useContext } from 'react'
import { View } from 'react-native'
import { SlideFreelancersScreenStyle } from './SlideFreelancersScreenStyle'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import FavouriteFreelancerList from './FavouriteFreelancerList/FavouriteFreelancerList'
import { FlatList } from 'react-native-gesture-handler'
import { Freelancers } from '../TopFreelancers/model/Freelancer'

const SlideFreelancersScreen = ({freelancers}: {freelancers: Freelancers[]}) => {
  const theme = useContext(ThemeContext);

  console.log("SlideFreelancersScreen");

  const keyExtractor = (item: Freelancers) => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <View style={SlideFreelancersScreenStyle.sliderContainer}>
        <FlatList
          style={{width: "95%"}}
          data={freelancers}
          renderItem={({ item }) => <FavouriteFreelancerList freelancer={item} />}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default SlideFreelancersScreen
