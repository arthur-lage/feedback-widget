import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
  isDisabled: boolean;
}

export function SubmitButton({ isDisabled, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      {...rest}
      style={[styles.container, isDisabled && styles.disabled]}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={[styles.title, isDisabled && styles.titleDisabled]}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
