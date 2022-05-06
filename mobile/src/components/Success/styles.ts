import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {},
  title: {
    marginVertical: 16,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
    color: theme.colors.text_primary,
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    marginTop: 12,
    paddingVertical: 12,
    marginBottom: 20,
    width: 300,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 12,
  },
  buttonText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
    fontSize: 14,
  },
});
