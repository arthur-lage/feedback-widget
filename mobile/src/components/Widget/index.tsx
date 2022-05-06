import { useRef, useState } from "react";
import React from "react";

import { View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import { ChatTeardropDots } from "phosphor-react-native";
import { theme } from "../../theme";

import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Options } from "../Options";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Form } from "../Form";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleResetFeedbackType() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  function handleSetFeedbackType(type: FeedbackType) {
    setFeedbackType(type);
  }

  function handleBack() {
    setFeedbackType(null);
  }

  function handleChangeFeedbackSent(state: boolean) {
    setFeedbackSent(state);
  }

  return (
    <>
      <TouchableOpacity onPress={handleOpen} style={styles.button}>
        <ChatTeardropDots
          weight="bold"
          color={theme.colors.text_on_brand_color}
          size={24}
        />
      </TouchableOpacity>

      <BottomSheet
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.modal}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
      >
        {feedbackSent ? (
          <Success handleResetFeedbackType={handleResetFeedbackType} />
        ) : (
          <>
            {feedbackType !== null ? (
              <Form
                handleChangeFeedbackSent={handleChangeFeedbackSent}
                handleBack={handleBack}
                feedbackType={feedbackType}
              />
            ) : (
              <Options handleSetFeedbackType={handleSetFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
