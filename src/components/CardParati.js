import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardParaTi({ titulo, contenido, precio, imagen, info }) {
    const navigation = useNavigation();

    return (
        <View style={styles.card}>
            <Image source={{ uri: imagen }} style={styles.imagen} />
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descripcion}>{contenido}</Text>
            <Text style={styles.precio}>{precio}</Text>

            <TouchableOpacity
                style={styles.btnVerMas}
                onPress={() =>
                    navigation.navigate("DetalleProducto", { titulo, contenido, precio, imagen, info })
                }
            >
                <Text style={styles.textoBtn}>Ver más</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#0a0909ff",
        margin: 10,
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
        padding: 12,
    },
    imagen: {
        width: "100%",
        height: 180,
        borderRadius: 8,
        marginBottom: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#fff",
    },
    descripcion: {
        fontSize: 16,
        color: "#e4e2e2ff",
        marginBottom: 6,
    },
    precio: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#007bff",
        marginBottom: 10,
    },
    btnVerMas: {
        backgroundColor: "#0af",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    textoBtn: {
        color: "#fff",
        fontWeight: "bold",
    },
});
