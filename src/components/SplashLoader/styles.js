import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: { flex: 1 },
  image: {
    width: 173.5,
    height: 173.5,
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    resizeMode: Constants.manifest.splash.resizeMode || "contain",
  },
});
