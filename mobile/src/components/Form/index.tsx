import { ArrowLeft } from "phosphor-react-native";
import React, { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

import { FeedbackType } from "../Widget";

import * as FileSystem from "expo-file-system";

type Props = {
  feedbackType: FeedbackType;
  handleBack: () => void;
  handleChangeFeedbackSent: (state: boolean) => void;
};

import { captureScreen } from "react-native-view-shot";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { ScreenshotButton } from "../ScreenshotButton";
import { SubmitButton } from "../SubmitButton";
import { api } from "../../services/api";

export function Form({
  feedbackType,
  handleBack,
  handleChangeFeedbackSent,
}: Props) {
  const [comment, setComment] = useState<string>("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

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

  async function handleFormSubmit() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 =
      screenshot &&
      (await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64,${screenshotBase64}`,
      });

      setIsSendingFeedback(false);
      handleChangeFeedbackSent(true);
    } catch (err) {
      console.log(err);
      setIsSendingFeedback(false);
    }
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
        value={comment}
        onChangeText={setComment}
        autoCorrect={false}
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
        <SubmitButton
          onPress={handleFormSubmit}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  );
}
