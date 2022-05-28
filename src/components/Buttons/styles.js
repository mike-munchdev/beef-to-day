import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    borderColor: "transparent",
    backgroundColor: Constants.manifest.splash.backgroundColor,
    marginHorizontal: 15,
    marginTop: 10,
  },
  textStyle: {
    color: Constants.manifest.extra.appVariables.colors.defaultTextColor,
    fontWeight: "bold",
    fontSize: 14,
  },
  leftIconViewStyle: { marginRight: 5 },
  rightIconViewStyle: { marginLeft: 5 },
});
