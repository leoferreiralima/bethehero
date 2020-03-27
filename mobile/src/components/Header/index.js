import React from "react";
import { View, Image } from "react-native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Header({ children }) {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      {children}
    </View>
  );
}
