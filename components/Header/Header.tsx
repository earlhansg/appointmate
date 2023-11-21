import { View, Text } from "react-native";
import Location from "../Location/Location";
import Service from "../Service/Service";

const Header = () => {
  return (
    <View>
      <Location />
      <Service/>
    </View>
  );
};

export default Header;
