import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import dayjs from "dayjs";
import styles from "./styles";
import { RoundedButton } from "../../components/Buttons";
import { backgrounds } from "../../asset";

const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

export default function Menu() {
  const [greeting, setGreeting] = useState(null);
  const [message, setMessage] = useState(null);
  const fadeAnimation = useRef(new Animated.Value(1.0)).current;

  useEffect(() => {
    const hour = dayjs().hour();
    if (hour >= 0 && hour < 12) {
      setGreeting("Good Morning");
      setMessage("Thanks for starting your day with us!");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Good Afternoon");
      setMessage("Thanks for joining us for lunch!");
    } else {
      setGreeting("Good Evening");
      setMessage("Thanks for joining us for dinner!");
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.post}></View>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>{greeting}, Michael</Text>
          <Text style={styles.welcomeMessageText}>{message}</Text>
        </View>
        <View style={styles.content}>
          <Animated.View
            style={[styles.messageCard, { opacity: fadeAnimation }]}
          >
            <View style={styles.messageCardHeader}>
              <Text style={styles.messageCardHeaderText}>
                Urgent Messages Go Here!
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(fadeAnimation, {
                    toValue: 0.0,
                    duration: 500,
                    useNativeDriver: true,
                  }).start();
                }}
              >
                <FontAwesome5
                  name="times"
                  size={24}
                  style={styles.messageCardHeaderCloseButton}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.messageCardContentText}>
              If there is an urgent message (e.g. food recall, global supply
              shortage, natural disasters, restaurant closers), this is where
              you will be notified
            </Text>
          </Animated.View>
          <RoundedButton
            title="Pickup at Restaurant"
            leftIcon={<FontAwesome5 name="hamburger" size={24} color="white" />}
          />
          <RoundedButton
            title="Deliver to me"
            leftIcon={<FontAwesome5 name="truck" size={24} color="white" />}
          />
          <RoundedButton
            title="Order Catering"
            buttonStyle={{
              backgroundColor:
                Constants.manifest.extra.appVariables.colors.defaultTextColor,
              marginHorizontal: 80,
            }}
            textStyle={{ color: Constants.manifest.splash.backgroundColor }}
          />
        </View>
        <StatusBar style="auto" barStyle="dark-content" />
      </ImageBackground>
    </View>
  );
}
