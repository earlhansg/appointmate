import { View, Text, Image, ImageBackground } from "react-native";
import { FreelancerListStyle } from "./FreelancerListStyle";
import { Freelancers } from "../TopFreelancers";


const FreelancerList = ({ freelancer }: { freelancer: Freelancers }) => {
  const backgroundColorSecondary = require("../../../assets/background-images/top-bg-secondary.png");
  const backgroundColorTertiary = require("../../../assets/background-images/top-bg-tertiary.png");

  return (
    <View style={FreelancerListStyle.listContainer}>
      <ImageBackground
        source={
          freelancer.id % 2 === 0
            ? backgroundColorTertiary
            : backgroundColorSecondary
        }
        style={[
          FreelancerListStyle.imgListContainer,
          {
            marginLeft: freelancer.id === 1 ? 0 : 15,
            marginRight: freelancer.id === 3 ? 15 : 0,
          },
        ]}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={FreelancerListStyle.listPrimaryText2}>
          <Text
            style={FreelancerListStyle.textName}
          >{`${freelancer.firstName} ${freelancer.lastName}`}</Text>
          <Text style={FreelancerListStyle.textSkill}>
            {freelancer.position}
          </Text>
          <Text style={FreelancerListStyle.textAddress}>
            {freelancer.address}
          </Text>
        </View>
        <View style={FreelancerListStyle.imageContainer}>
          <Image
            source={freelancer.imageUrl}
            resizeMode="contain"
            style={{ width: 130, height: 150 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default FreelancerList;
