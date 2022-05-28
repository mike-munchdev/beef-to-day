import React, { useMemo } from "react";
import { View, Animated, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
const image = require("../../../assets/beef-to-day-logo.png");

export default function SplashLoader() {
  const animation = useMemo(() => new Animated.Value(1), []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" barStyle="light-content" />
      <Animatable.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: Constants.manifest.splash.backgroundColor,
            opacity: animation,
          },
        ]}
      >
        <Animatable.Image
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.image}
          source={image}
        />
      </Animatable.View>
    </View>
  );
}
