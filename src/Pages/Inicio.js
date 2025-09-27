import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Platform, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardProducto from '../components/Card';
import { showMessage } from "react-native-flash-message";

const Inicio = () => {
  const navigation = useNavigation();
  const [productos, setProductos] = useState([]);
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

  const eliminarProducto = async (id) => {
    Alert.alert(
      "Eliminar Producto",
      "¿Seguro que deseas eliminar este producto?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await fetch(`${backendURL}/${id}`, { method: "DELETE" });
              fetchProductos();
              showMessage({
                message: "Producto eliminado",
                description: "Se eliminó correctamente",
                type: "danger",
                icon: "success",
                duration: 2000,
              });
            } catch (error) {
              console.error("Error al eliminar:", error);
              showMessage({
                message: "Error",
                description: "No se pudo eliminar el producto",
                type: "danger",
                icon: "danger",
                duration: 2000,
              });
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.appBar}>
        <Text style={styles.title}>Productos</Text>
      </View>

      <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingBottom: 80 }}>
        {productos.map((prod) => (
          <CardProducto
            key={prod.id}
            titulo={prod.titulo}
            contenido={prod.descripcion}
            precio={`$${prod.precio}`}
            imagen={prod.imagen}
            onEdit={() => navigation.navigate("Formulario", { producto: prod })}
            onDelete={() => eliminarProducto(prod.id)}
          />
        ))}
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
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    alignItems: 'center',
  },
  appBar: {
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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


export default Inicio;
