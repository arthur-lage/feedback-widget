import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    textAlign: 'center',
    
    color: theme.colors.text_secondary
  },
  underlined: {
    textDecorationLine: "underline",
  },
});
