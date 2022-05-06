import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    marginVertical: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 24,
  },
  titleText: {
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 20,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  arrow: {
    position: "absolute",
    left: 16,
    top: 16,
  },
  input: {
    height: 112,
    padding: 12,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  footer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
});
