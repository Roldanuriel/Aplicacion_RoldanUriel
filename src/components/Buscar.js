import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from "react-native-paper"; 

export default function App() {
  const navigation = useNavigation();

  // estado para Searchbar
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={[styles.container]}>
      {/* Searchbar arriba */}
      <Searchbar
        placeholder="Buscar productos..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />

      {/* NAVBAR */}
      <View style={styles.navbar}>
        {/* Para ti */}
        <TouchableOpacity
          style={styles.iconColumn}
          onPress={() => navigation.navigate("ParaTi")}
        >
          <FontAwesome name="th-large" size={20} color="#fff" />
          <Text style={styles.navText}>Para ti</Text>
        </TouchableOpacity>

        {/* Productos */}
        <TouchableOpacity
          style={styles.iconColumn}
          onPress={() => navigation.navigate("Inicio")}
        >
          <View style={styles.iconRow}>
            <FontAwesome
              name="laptop"
              size={20}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <FontAwesome name="mobile" size={20} color="#fff" />
          </View>
          <Text style={styles.navText}>Productos</Text>
        </TouchableOpacity>

        {/* Inventario */}
        <TouchableOpacity
          style={styles.iconColumn}
          onPress={() => navigation.navigate("Formulario")}
        >
          <FontAwesome name="apple" size={20} color="#fff" />
          <Text style={styles.navText}>Inventario</Text>
        </TouchableOpacity>

        {/* Búsqueda */}
        <TouchableOpacity style={styles.iconColumn}>
          <FontAwesome name="search" size={20} color="#fff" />
          <Text style={styles.navText}>Búsqueda</Text>
        </TouchableOpacity>

        {/* Configuración */}
        <TouchableOpacity
          style={styles.iconColumn}
          onPress={() => navigation.navigate("Configuracion")}
        >
          <FontAwesome name="gears" size={20} color="#fff" />
          <Text style={styles.navText}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#000", 
  },
  searchbar: {
    width: "90%",
    marginBottom: 20,
    borderRadius: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#222",
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  iconColumn: {
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
  },
  navText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 4,
  },
});

