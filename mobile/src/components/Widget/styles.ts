import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: getBottomSpace() + 16,
    right: 16,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    marginBottom: getBottomSpace() + 16,
  },
  indicator: {
    width: 56,
    padding: 0,
    backgroundColor: theme.colors.text_primary,
  },
  header: {},
  footer: {},
});
