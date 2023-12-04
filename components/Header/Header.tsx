import { View, Text } from "react-native";
import Location from "../Location/Location";
import Service from "../Service/Service";
import Search from "../Search/Search";

const Header = () => {
  return (
    <View>
      <Location />
      {/* <Service /> */}
      <Search />
    </View>
  );
};

export default Header;
