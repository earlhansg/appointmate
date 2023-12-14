import { View, Text, Image } from "react-native";
import { FreelancerListStyle } from "./FreelancerListStyle";
import { Freelancers } from "../model/Freelancer";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";


const FreelancerList = ({ freelancer }: { freelancer: Freelancers }) => {
  const appTheme =  useContext(ThemeContext)
  return (
    <View style={FreelancerListStyle.listContainer}>
      <View
        style={[
          FreelancerListStyle.imgListContainer,
          {
            marginLeft: freelancer.id === 1 ? 0 : 15,
            marginRight: freelancer.id === 3 ? 15 : 0,
            backgroundColor: freelancer.id % 2 === 0 ? appTheme.secondary.color : appTheme.primary.color
          },
        ]}
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
      </View>
    </View>
  );
};

export default FreelancerList;
