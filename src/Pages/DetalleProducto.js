import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Platform, StatusBar, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DetalleProducto = ({ route }) => {
  const { titulo, contenido, precio, imagen, info } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.title}>Detalle</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: imagen }} style={styles.imagen} />
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion}>{contenido}</Text>
        <Text style={styles.precio}>{precio}</Text>
        <Text style={styles.info}>{info}</Text>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("ParaTi")}>
          <FontAwesome name="th-large" size={20} color="#fff" />
          <Text style={styles.navText}>Para ti</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Inicio")}>
          <FontAwesome name="laptop" size={20} color="#fff" />
          <Text style={styles.navText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Formulario")}>
          <FontAwesome name="apple" size={20} color="#fff" />
          <Text style={styles.navText}>Inventario</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Buscar")}>
          <FontAwesome name="search" size={20} color="#fff" />
          <Text style={styles.navText}>Busqueda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Configuracion")}>
          <FontAwesome name="gears" size={20} color="#fff" />
          <Text style={styles.navText}>Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
  },
  appBar: {
    width: "100%",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  descripcion: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 8,
    textAlign: "center",
  },
  precio: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0af",
    marginBottom: 12,
  },
  info: {
    fontSize: 14,
    color: "#ddd",
    lineHeight: 20,
    textAlign: "justify",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0b07077e",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#444"
  },
  iconColumn: { alignItems: "center" },
  navText: { fontSize: 12, marginTop: 2, color: "#fff" }
});

export default DetalleProducto;
