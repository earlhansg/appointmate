import React from 'react'
import { TouchableHighlight, Image, FlatList } from "react-native";

import TouchableImageButton from "../../Buttons/TouchableImageButton";
import { FreelanceDeal } from '../model/FreelanceDeal';
import { FreelancerDealsStyle } from './FreelancerDealsStyle';

const FreelancerDeals = ({ freelanceDeals }: { freelanceDeals: FreelanceDeal[] }) => {
  const navigate = () => {
    console.log("im click in Try");
  };
  const keyExtractor = (item: FreelanceDeal) => item.id.toString();
  return (
    <>
      <FlatList
        data={freelanceDeals}
        renderItem={({ item }) => (
          <TouchableImageButton
            key={item.id}
            renderImage={(settings) => (
              <TouchableHighlight
                style={FreelancerDealsStyle.imageButton}
                underlayColor={settings.underlayColor}
                onPress={navigate}
              >
                <Image
                  source={item.imageUrl}
                  resizeMode="contain"
                  style={FreelancerDealsStyle.ImageButtonContainer}
                />
              </TouchableHighlight>
            )}
          >
          </TouchableImageButton>
        )}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

export default FreelancerDeals
