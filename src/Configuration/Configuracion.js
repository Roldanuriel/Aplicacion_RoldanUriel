import React, { useState, createContext, useContext, useReducer} from "react";
import { StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Contexto
const ColorContext = createContext();

// Reducer para cambiar color
const reducer = (state, action) => {
  switch (action.type) {
    case "CAMBIAR_COLOR":
      return { color: state.color === "#fff" ? "#000000b5" : "#ff0000ff" };
    default:
      return state;
  }
};

// Botón que cambia el color usando context
function BotonCambiarColor() {
  const { dispatch } = useContext(ColorContext);
  return (
    <TouchableOpacity
      style={styles.colorButton}
      onPress={() => dispatch({ type: "CAMBIAR_COLOR" })}
    >
      <Text style={styles.colorButtonText}>Cambiar Fondo</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, { color: "#fff" });

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      <View
        style={[
          styles.container,
          { backgroundColor: state.color },
        ]}
      >
        <Text style={styles.text}>Pantalla configuracion</Text>
        <BotonCambiarColor />

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

          {/* Conocer más */}
          <TouchableOpacity style={styles.iconColumn}>
            <FontAwesome name="apple" size={20} color="#fff" />
            <Text style={styles.navText}>Conocer más</Text>
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
    </ColorContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,

  },
  colorButton: {
    backgroundColor: "#c90000ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  colorButtonText: {
    color: "#fff",
    fontSize: 16,
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