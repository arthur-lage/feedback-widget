import { Camera, Trash } from "phosphor-react-native";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({
  screenshot,
  onTakeScreenshot,
  onRemoveScreenshot,
}: Props) {
  return (
    <TouchableOpacity
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
      style={styles.container}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />
          
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <>
          <Camera weight="bold" size={24} color={theme.colors.text_primary} />
        </>
      )}
    </TouchableOpacity>
  );
}
