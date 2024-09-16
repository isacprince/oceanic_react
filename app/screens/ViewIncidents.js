import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BackButton from "../components/BackButton";

export default function ViewIncidents({ navigation }) {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      const savedIncidents = JSON.parse(await AsyncStorage.getItem("incidents")) || [];
      setIncidents(savedIncidents);
    };

    fetchIncidents();
  }, []);

  const updateStatus = async (index, status) => {
    const updatedIncidents = incidents.map((incident, i) =>
      i === index ? { ...incident, status } : incident
    );
    setIncidents(updatedIncidents);
    await AsyncStorage.setItem("incidents", JSON.stringify(updatedIncidents));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "resolved":
        return "green";
      case "failed":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Incidentes Cadastrados</Header>
      <View style={styles.incidentList}>
        {incidents.length === 0 ? (
          <Text>Nenhum incidente cadastrado.</Text>
        ) : (
          incidents.map((incident, index) => (
            <View key={index} style={styles.incidentContainer}>
              <Text>Título: {incident.title}</Text>
              <Text>Coordenadas: {incident.coordinates}</Text>
              <Text>Gravidade: {incident.severity}</Text>
              <View
                style={[
                  styles.statusCircle,
                  { backgroundColor: getStatusColor(incident.status) },
                ]}
              />
              <Button
                mode="outlined"
                onPress={() => updateStatus(index, "resolved")}
              >
                Resolvido
              </Button>
              <Button
                mode="outlined"
                onPress={() => updateStatus(index, "failed")}
              >
                Falha
              </Button>
            </View>
          ))
        )}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  incidentList: {
    marginTop: 20,
  },
  incidentContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  statusCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginVertical: 8,
  },
});
