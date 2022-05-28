import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  post: {
    height: 30,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  welcomeText: {
    textTransform: "uppercase",
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "EBGaramond",
    marginTop: 50,
    marginLeft: 30,
  },
  welcomeMessageText: {
    marginLeft: 30,
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "black",
    color: "white",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  messageCard: {
    backgroundColor: "rgb(0, 78, 112)",
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "transparent",
    padding: 15,
  },
  messageCardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  messageCardHeaderText: {
    justifyContent: "flex-start",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: Constants.manifest.extra.appVariables.colors.defaultTextColor,
  },
  messageCardHeaderCloseButton: {
    color: Constants.manifest.extra.appVariables.colors.defaultTextColor,
  },
  messageCardContentText: {
    color: Constants.manifest.extra.appVariables.colors.defaultTextColor,
    fontSize: 14,
  },
});
