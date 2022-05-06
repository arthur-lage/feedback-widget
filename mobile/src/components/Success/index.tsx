import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";

type Props = {
  handleResetFeedbackType: () => void;
};

export function Success({ handleResetFeedbackType }: Props) {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o seu feedback</Text>

      <TouchableOpacity onPress={handleResetFeedbackType} style={styles.button}>
        <Text style={styles.buttonText}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}
