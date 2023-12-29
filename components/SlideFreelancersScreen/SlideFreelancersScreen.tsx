import React, { useContext } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { SlideFreelancersScreenStyle } from './SlideFreelancersScreenStyle'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import FavouriteFreelancerList from './FavouriteFreelancerList/FavouriteFreelancerList'
import { FlatList } from 'react-native-gesture-handler'
import { Freelancers } from '../TopFreelancers/model/Freelancer'

const SlideFreelancersScreen = () => {
  const theme = useContext(ThemeContext);

  const user1 = require("../../assets/profile-images/user1.png");

  const favouritesFreelancers = [
    {
      id: 1,
      imageUrl: user1,
      firstName: "Charles",
      lastName: "Peprahs",
      position: "Digital Artist",
      address: "Camaman-an",
      username: "@charlieP",
      completed: 100,
      ratings: 5.9
    },
    {
      id: 2,
      imageUrl: user1,
      firstName: "Earl",
      lastName: "Genoso",
      position: "Host",
      address: "Bulua",
      username: "@ealhansgenoso",
      completed: 20,
      ratings: 7
    },
    {
      id: 3,
      imageUrl: user1,
      firstName: "Earl",
      lastName: "Genoso",
      position: "Host",
      address: "Bulua",
      username: "@ealhansgenoso",
      completed: 20,
      ratings: 7
    }
  ]

  const keyExtractor = (item: Freelancers) => item.id.toString();

  return (
    <View style={{ flex: 1 }}>
      <View style={SlideFreelancersScreenStyle.sliderContainer}>
        <FlatList
          style={{width: "95%"}}
          data={favouritesFreelancers}
          renderItem={({ item }) => <FavouriteFreelancerList freelancer={item} />}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default SlideFreelancersScreen
