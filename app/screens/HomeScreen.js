import React from "react";
import { StyleSheet, View } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Bem-vindo ao Oceanic.</Header>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("RegisterIncident")}
        >
          Cadastrar Incidente
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("ViewIncidents")}
        >
          Visualizar Incidentes
        </Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
