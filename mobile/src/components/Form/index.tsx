import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

import { FeedbackType } from "../Widget";

type Props = {
  feedbackType: FeedbackType;
  handleBack: () => void;
  handleChangeFeedbackSent: () => void;
};

import { captureScreen } from "react-native-view-shot";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { ScreenshotButton } from "../ScreenshotButton";
import { SubmitButton } from "../SubmitButton";

export function Form({
  feedbackType,
  handleBack,
  handleChangeFeedbackSent,
}: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [isLoading, setIsLoading] = useState(false);

  const [screenshot, setScreenshot] = useState<string | null>(null);

  function handleTakeScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) => console.log(error));
  }

  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  function handleFormSubmit() {
    setIsLoading(true);

    setTimeout(() => {
      handleChangeFeedbackSent();
      setIsLoading(false);
    }, 1700);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.arrow}>
        <ArrowLeft
          weight="bold"
          size={24}
          color={theme.colors.text_secondary}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />

          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholderTextColor={theme.colors.text_secondary}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeScreenshot={handleTakeScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot}
        />
        <SubmitButton onPress={handleFormSubmit} isLoading={isLoading} />
      </View>
    </View>
  );
}
