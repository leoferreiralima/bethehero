import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

import { useNavigation, useRoute } from "@react-navigation/native";

import Header from "../../components/Header";

import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { incident } = route.params;

  const formattedValue = Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(incident.value);

  const { ong } = incident;

  const message = `Olá ${ong.name}, estou entrando em contato pois gostaria no caso "${incident.description}" com o valor de ${formattedValue}`;

  function natigateBackOrIncidents() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("Incidents");
    }
  }

  async function sendMail() {
    await MailComposer.composeAsync({
      subject: "Herói do Caso: Teste",
      recipients: ong.email,
      body: message,
    });
  }

  function sendWhastapp() {
    Linking.openURL(`whatsapp://send?phone=+55${ong.whataspp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <Header>
        <TouchableOpacity onPress={natigateBackOrIncidents}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>Ong:</Text>
          <Text style={styles.incidentValue}>
            {ong.name} de {ong.city}/{ong.uf}
          </Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>{incident.description}</Text>

          <Text style={styles.incidentProperty}>Valor</Text>
          <Text style={styles.incidentValue}>{formattedValue}</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhastapp}>
              <Text style={styles.actionText}> Whatsapp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}> E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
