import React from "react";

import { View, Text } from "react-native";
import { DealsStyle } from "./DealsStyle";

import ShopDeals  from "./ShopDeals/ShopDeals";
import FreelancerDeals from "./FreelancerDeals/FreelancerDeals";

const Deals = () => {
  const dealsImage1 = require("../../assets/deals-images/cleaning.jpg");
  const dealsImage2 = require("../../assets/deals-images/beauty.jpg");

  const freelancerDealsImage1 = require("../../assets/deals-images/freelance-deals1.png")
  const freelancerDealsImage2 = require("../../assets/deals-images/freelance-deals2.png")
  const freelancerDealsImage3 = require("../../assets/deals-images/freelance-deals3.png")
  const freelancerDealsImage4 = require("../../assets/deals-images/freelance-deals4.png")

  const shopDeals = [
    {
      id: 1,
      imageUrl: dealsImage1,
      name: "Demetrio Cleaning Services",
      position: "shop",
      address: "Tomasaco Macasandig",
    },
    {
      id: 2,
      imageUrl: dealsImage2,
      name: "Beauty Standards",
      position: "shop",
      address: "CM Recto",
    },
  ];

  const freelancerDeals = [
    {
      id: 1,
      imageUrl: freelancerDealsImage1,
      firstName: "Mia",
      lastName: "Lester",
      position: "freelancer",
      address: "CDO"
    },
    {
      id: 2,
      imageUrl: freelancerDealsImage2,
      firstName: "John",
      lastName: "Doe",
      position: "freelancer",
      address: "CDO"
    },
    {
      id: 3,
      imageUrl: freelancerDealsImage3,
      firstName: "John",
      lastName: "dela Cruz",
      position: "freelancer",
      address: "CDO"
    },
    {
      id: 4,
      imageUrl: freelancerDealsImage4,
      firstName: "John",
      lastName: "Jose",
      position: "freelancer",
      address: "CDO"
    }
  ]

  return (
    <View style={DealsStyle.container}>
      <View>
        <Text style={DealsStyle.header}>DAILY DEALS</Text>
      </View>
      <View style={DealsStyle.shopDealsContainer}>
        <ShopDeals shopDeals={shopDeals} showInHorizontal={true}/>
      </View>
      <View style={DealsStyle.freelancerDealsContainer}>
        <FreelancerDeals freelanceDeals={freelancerDeals}/>
      </View>
    </View>
  );
};

export default Deals;
