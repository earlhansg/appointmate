import { View, Text } from "react-native";
import Location from "./Location/Location";
import Search from "./Search/Search";

const Header = () => {
  return (
    <View>
      <Location />
      <Search />
    </View>
  );
};

export default Header;
