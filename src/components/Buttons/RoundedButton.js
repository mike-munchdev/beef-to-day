import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default ({
  title,
  buttonStyle,
  textStyle,
  leftIcon,
  rightIcon,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonStyle,
        ...buttonStyle,
      }}
      onPress={() => {
        if (handlePress) handlePress();
      }}
    >
      {leftIcon && <View style={styles.leftIconViewStyle}>{leftIcon}</View>}
      <Text
        style={{
          ...styles.textStyle,
          ...textStyle,
        }}
      >
        {title || "Button"}
      </Text>
      {rightIcon && <View style={styles.rightViewIconStyle}>{rightIcon}</View>}
    </TouchableOpacity>
  );
};
