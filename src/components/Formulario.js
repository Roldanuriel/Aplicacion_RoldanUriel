import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Alert, Text, TouchableOpacity, Platform, StatusBar } from "react-native";
import { TextInput, Button, Card, Paragraph } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function FormularioProducto({ navigation }) {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [editingId, setEditingId] = useState(null);

  const backendURL = "http://192.168.1.78:3000/productos";

  const fetchProductos = async () => {
    try {
      const response = await fetch(backendURL);
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

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
      } else {
        response = await fetch(backendURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ titulo, descripcion, precio, imagen }),
        });
      }
      const data = await response.json();
      console.log("Guardado:", data);

      setTitulo("");
      setDescripcion("");
      setPrecio("");
      setImagen("");
      setEditingId(null);

      fetchProductos();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  const editarProducto = (prod) => {
    setTitulo(prod.titulo);
    setDescripcion(prod.descripcion);
    setPrecio(prod.precio.toString());
    setImagen(prod.imagen);
    setEditingId(prod.id);
  };

  const eliminarProducto = async (id) => {
    try {
      await fetch(`${backendURL}/${id}`, { method: "DELETE" });
      fetchProductos();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <View style={styles.main}>
      {/* AppBar superior */}
      <View style={styles.appBar}>
        <Text style={styles.title}>Agregar Productos</Text>
      </View>

      {/* Contenido */}
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        <TextInput
          label="Título"
          mode="outlined"
          value={titulo}
          onChangeText={setTitulo}
          style={styles.input}
          textColor="#0b0707ff"
          activeOutlineColor="#000000ff"
          outlineColor="#444"
        />
        <TextInput
          label="Descripción"
          mode="outlined"
          value={descripcion}
          onChangeText={setDescripcion}
          style={styles.input}
          textColor="#070404ff"
          activeOutlineColor="#000000ff"
          outlineColor="#444"
        />
        <TextInput
          label="Precio"
          mode="outlined"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
          style={styles.input}
          textColor="#000000ff"
          activeOutlineColor="#000000ff"
          outlineColor="#444"
        />
        <TextInput
          label="URL Imagen"
          mode="outlined"
          value={imagen}
          onChangeText={setImagen}
          style={styles.input}
          textColor="#000000ff"
          activeOutlineColor="#000000ff"
          outlineColor="#444"
        />
        <Button
          mode="contained"
          onPress={guardarProducto}
          style={{ marginBottom: 20, backgroundColor: '#222' }}
          textColor="#fff"
        >
          {editingId ? "Actualizar Producto" : "Crear Producto"}
        </Button>

        {productos.map((prod) => (
          <Card key={prod.id} style={{ marginBottom: 15, backgroundColor: '#111' }}>
            <Card.Cover source={{ uri: prod.imagen }} />
            <Card.Content>
              <Paragraph style={{ fontWeight: "bold", color: "#fff", textDecorationLine: 'none' }}>
                {prod.titulo}
              </Paragraph>
              <Paragraph style={{ color: "#000000ff", textDecorationLine: 'none' }}>
                {prod.descripcion}
              </Paragraph>
              <Paragraph style={{ color: "#fff", textDecorationLine: 'none' }}>
                ${prod.precio}
              </Paragraph>
            </Card.Content>

            <Card.Actions>
              <Button mode="outlined" onPress={() => editarProducto(prod)} textColor="#fff" style={{ borderColor: '#fff' }}>
                Editar
              </Button>
              <Button mode="outlined" onPress={() => eliminarProducto(prod.id)} textColor="red" style={{ borderColor: 'red' }}>
                Eliminar
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>

      {/* Navbar inferior */}
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

        <TouchableOpacity style={styles.iconColumn}>
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
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
  },
  appBar: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginBottom: 10,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0b07077e',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  iconColumn: {
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 2,
    color: '#fff',
  },
});
