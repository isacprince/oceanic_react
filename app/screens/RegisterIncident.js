import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";

export default function RegisterIncident({ navigation }) {
  const [title, setTitle] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSave = async () => {
    const newIncident = { title, coordinates, severity, status: "default" };
    // Código de salvar incidente...
    navigation.navigate("ViewIncidents");
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Cadastrar Incidente</Header>
      <TextInput
        label="Título do Incidente"
        returnKeyType="next"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        label="Coordenadas"
        returnKeyType="next"
        value={coordinates}
        onChangeText={(text) => setCoordinates(text)}
      />
      <TextInput
        label="Gravidade"
        returnKeyType="done"
        value={severity}
        onChangeText={(text) => setSeverity(text)}
      />
      <Button mode="contained" onPress={handleSave}>
        Salvar Incidente
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
});
