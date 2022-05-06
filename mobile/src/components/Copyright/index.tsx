import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Criado com ❤ por <Text style={styles.underlined}>Arthur Lage</Text>
      </Text>
    </View>
  );
}
