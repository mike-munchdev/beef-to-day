import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { MenuScreen } from "../screens/Menu";

const Tab = createBottomTabNavigator();

function RewardsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Rewards!</Text>
    </View>
  );
}
function ScanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Scan!</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Account!</Text>
    </View>
  );
}
function MyOrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My Order!</Text>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const iconSize = 24;

            switch (route.name) {
              case "Menu":
                iconName = "fast-food-outline";
                break;
              case "Rewards":
                iconName = "gift-outline";
                break;
              case "Scan":
                iconName = "qr-code-outline";
                break;
              case "Account":
                iconName = "person-outline";
                break;
              case "MyOrder":
                iconName = "receipt-outline";
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={iconSize} color={color} />;
          },
          tabBarActiveTintColor:
            Constants.manifest.extra.appVariables.colors.defaultColor,
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="MyOrder" component={MyOrderScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
