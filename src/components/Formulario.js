import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Alert, Platform, StatusBar, TouchableOpacity, StyleSheet, } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { showMessage } from "react-native-flash-message";

export default function FormularioProducto({ navigation, route }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [editingId, setEditingId] = useState(null);

  const backendURL = "http:// 192.168.1.78:3000/productos";

  useEffect(() => {
    if (route.params?.producto) {
      const prod = route.params.producto;
      setTitulo(prod.titulo);
      setDescripcion(prod.descripcion);
      setPrecio(prod.precio.toString());
      setImagen(prod.imagen);
      setEditingId(prod.id);
    }
  }, [route.params]);

  const guardarProducto = async () => {
    if (!titulo || !descripcion || !precio || !imagen) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;         
    }
    try {
      let response;
      if (editingId) {
        response = await fetch(`${backendURL}/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ titulo, descripcion, precio, imagen }),
        });
        await response.json();
        showMessage({
          message: "Producto actualizado",
          description: "Los cambios se guardaron correctamente",
          type: "success",
          icon: "success",
          duration: 2000,
        });
      } else {
        response = await fetch(backendURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ titulo, descripcion, precio, imagen }),
        });
        await response.json();
        showMessage({
          message: "Producto creado",
          description: "Se guardó correctamente",
          type: "success",
          icon: "success",
          duration: 2000,
        });
      }

      // Limpiar campos
      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setImagen("");
      setEditingId(null);

      // Volver a la pantalla anterior
      navigation.goBack();
    } catch (error) {
      console.error("Error al guardar producto:", error);
      showMessage({
        message: "Error",
        description: "No se pudo guardar el producto",
        type: "danger",
        icon: "danger",
        duration: 2000,
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
      }}
    >
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <TextInput
          label="Título"
          mode="outlined"
          value={titulo}
          onChangeText={setTitulo}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Descripción"
          mode="outlined"
          value={descripcion}
          onChangeText={setDescripcion}
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="Precio"
          mode="outlined"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
          style={{ marginBottom: 10 }}
        />
        <TextInput
          label="URL Imagen"
          mode="outlined"
          value={imagen}
          onChangeText={setImagen}
          style={{ marginBottom: 20 }}
        />
        <Button mode="contained" onPress={guardarProducto}>
          {editingId ? "Actualizar Producto" : "Crear Producto"}
        </Button>
      </ScrollView>

      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("ParaTi")}>
          <FontAwesome name="th-large" size={20} color="#fff" />
          <Text style={styles.navText}>Para ti</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Inicio")}>
          <View style={styles.iconRow}>
            <FontAwesome name="laptop" size={20} color="#fff" style={{ marginRight: 4 }} />
            <FontAwesome name="mobile" size={20} color="#fff" />
          </View>
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
          <Text style={styles.navText}>Configuracion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderTopColor: "#444",
  },
  iconColumn: {
    alignItems: "center",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    color: "#fff",
  },
});
