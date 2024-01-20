import React, { useContext } from 'react'

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SlideShopsScreen from "../../components/SlideShopsScreen/SlideShopsScreen";
import SlideFreelancersScreen from '../../components/SlideFreelancersScreen/SlideFreelancersScreen'
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { ShopDeal } from '../Deals/model/ShopDeal';
import { Freelancers } from '../TopFreelancers/model/Freelancer';

const Tab = createMaterialTopTabNavigator();

type SliderTabProps = {
    shops: ShopDeal[];
    freelancers: Freelancers[];
}

const SliderTab = ({shops, freelancers} : SliderTabProps) => {
  const theme = useContext(ThemeContext);

  console.log("SliderTab");

  return (
    <>
    <Tab.Navigator>
        <Tab.Screen
          name="Shops"
          children={() => <SlideShopsScreen shopDeals={shops}/> }
          options={{
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "500",
            },
            tabBarActiveTintColor: theme.primary.color,
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderColor: theme.primary.color,
            },
          }}
        />
        <Tab.Screen
          name="Freelancers"
          children={() => <SlideFreelancersScreen freelancers={freelancers}/> }
          options={{
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "500",
            },
            tabBarActiveTintColor: theme.primary.color,
            tabBarIndicatorStyle: {
              borderBottomWidth: 2,
              borderColor: theme.primary.color,
            },
          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default SliderTab
