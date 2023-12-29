import React, { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { FavouriteFreelancerListStyle } from "./FavouriteFreelancerListStyle";
import { Freelancers } from "../../TopFreelancers/model/Freelancer";

type FavouriteFreelancerListProps = {
  freelancer: Freelancers
}

const FavouriteFreelancerList = ({freelancer} : FavouriteFreelancerListProps) => {
  const theme = useContext(ThemeContext);
  const user1 = require("../../../assets/profile-images/user1.png");
  return (
    <View style={FavouriteFreelancerListStyle.container}>
      <View style={FavouriteFreelancerListStyle.primaryHeaderContainer}>
        <Image
          source={freelancer.imageUrl}
          resizeMode="contain"
          style={FavouriteFreelancerListStyle.primaryHeaderImage}
        />
        <View style={FavouriteFreelancerListStyle.primaryHeaderContent}>
          <Text style={FavouriteFreelancerListStyle.primaryHeaderContent1}>
            {`${freelancer.firstName} ${freelancer.lastName}`}
          </Text>
          <Text
            style={[
              {
                color: theme.gray.light3,
              },
              FavouriteFreelancerListStyle.primaryHeaderContent2,
            ]}
          >
            {freelancer.username}
          </Text>
          <Text
            style={[
              {
                color: theme.black.light1,
              },
              FavouriteFreelancerListStyle.primaryHeaderContent3,
            ]}
          >
            {freelancer.position}
          </Text>
        </View>
      </View>
      <View style={FavouriteFreelancerListStyle.secondaryHeaderContainer}>
        <View>
          <Text
            style={[
              {
                color: theme.black.light1,
              },
              FavouriteFreelancerListStyle.secondaryHeaderContent1,
            ]}
          >
            Completed
          </Text>
          <Text style={FavouriteFreelancerListStyle.secondaryHeaderContent2}>
            {freelancer.completed}
          </Text>
        </View>
        <View>
          <Text
            style={[
              {
                color: theme.black.light1,
              },
              FavouriteFreelancerListStyle.secondaryHeaderContent1,
            ]}
          >
            Ratings
          </Text>
          <Text style={FavouriteFreelancerListStyle.secondaryHeaderContent2}>
            {freelancer.ratings}
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Pressable
            style={[
              {
                backgroundColor: theme.primary.color,
              },
              FavouriteFreelancerListStyle.appointNowPressable,
            ]}
          >
            <Text style={[{ color: theme.white.color }]}>Appoint Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FavouriteFreelancerList;
