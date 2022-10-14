import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { MenuScreen } from "../screens/Menu";
import { RewardsScreen } from "../screens/Rewards";
import { ScanScreen } from "../screens/Scan";
import { AccountScreen } from "../screens/Account";
import { MyOrderScreen } from "../screens/MyOrder";

const Tab = createBottomTabNavigator();

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
