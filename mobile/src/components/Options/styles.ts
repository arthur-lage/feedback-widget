import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  options: {
    width: "100%",
    marginBottom: 48,
    justifyContent: 'center',
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    marginTop: 7.5,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
