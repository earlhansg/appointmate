import { Button, StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home/Home";
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome5, Entypo, Ionicons, MaterialIcons  } from "@expo/vector-icons";
import CustomDrawerContent from "./components/CustomDrawerContent/CustomDrawerContent";
import ThemeContextProvider from "./components/ThemeContext/ThemeContext";

const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation } : any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
          {/* <Drawer.Navigator> */}
          <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false, drawerItemStyle: {
              display: "none"
            }
  }} />
  <Drawer.Screen name="Appointments" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0},
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <FontAwesome5 name="calendar-check" size={18} color="#5F6F52" style={{marginLeft: 4}}/>
                  <Text style={{fontSize: 13, marginLeft: 20}}>Appointments</Text>
                </View>
              )
  }}/>
  <Drawer.Screen name="Favorites" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0 },
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <Entypo name="heart-outlined" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>Favorites</Text>
                </View>
              )
              
  }} />
  <Drawer.Screen name="View profile" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0 }, 
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <FontAwesome5 name="user" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>View profile</Text>
                </View>
              )
              
  }} />
  <Drawer.Screen name="Addresses" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0 }, 
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <Feather name="map-pin" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>Addresses</Text>
                </View>
              )
              
  }} />
  <Drawer.Screen name="Rewards" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0 }, 
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <Ionicons name="trophy-outline" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>Rewards</Text>
                </View>
              )
              
  }} />
  <Drawer.Screen name="Become pro" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0 }, 
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <MaterialIcons name="wallet-membership" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>Become pro</Text>
                </View>
              )
              
  }} />
  <Drawer.Screen name="Help center" component={NotificationsScreen} 
              options={{ headerShown: false, drawerItemStyle: { width: "100%", marginLeft: 0, marginBottom: 0 },
              drawerLabel: ({color, focused}) => (
                <View style={{flexDirection:"row"}}>
                  <Feather name="help-circle" size={18} color="#5F6F52" />
                  <Text style={{fontSize: 13, marginLeft: 20}}>Help center</Text>
                </View>
              )
  }} />
          </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
