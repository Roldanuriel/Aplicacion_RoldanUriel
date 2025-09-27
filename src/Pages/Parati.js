import React from "react";
import { View, ScrollView, StyleSheet, Platform, StatusBar, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardParaTi from "../components/CardParati";

const productos = [
    {
        titulo: "Explora Apple intelligence",
        contenido: "Ven a conocerlo en una sesión",
        precio: "gratis en Apple Store",
        imagen: "https://cdn.arstechnica.net/wp-content/uploads/2024/06/apple_intelligence_hero-760x380.jpg",
        info: "Apple Intelligence is the personal intelligence system that puts powerful generative models right at the core of your iPhone, iPad, Mac, Apple Vision Pro, and Apple Watch with incredible new features to help people communicate and work better. You can bring Apple Intelligence features right into your apps, integrate into places across the system via App Intents, and tap into models directly to build your own intelligent experiences."
    },
    {
        titulo: "Obtén 3 meses gratis de Apple Music",
        contenido: "Incluido en la compra de productos elegibles",
        precio: "productos Apple elegibles",
        imagen: "https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?resize=1024",
        info: "Para activar la oferta en tu nuevo iPhone, iPad, Mac o Apple TV, configura tu dispositivo. Para activarla en tus AirPods, HomePod, auriculares o altavoces Beats, conecta o enlaza tu nuevo dispositivo a un iPhone o iPad con la versión más reciente de iOS o iPadOS. Para activarla en Apple Watch, conecta o enlaza tu dispositivo válido a un iPhone con la versión más reciente de iOS."
    },
    {
        titulo: "Apple TV+",
        contenido: "Espectáculos originales",
        precio: "Desde $200",
        imagen: "https://www.tvguide.com/a/img/hub/2019/03/26/d5ad9a49-1b28-4e2a-835b-4ed54ad332cf/190325-appletv.jpg",
        info: "Apple TV+ es un servicio de streaming de Apple que ofrece contenido original exclusivo, incluyendo series, películas y shows. Lanzado en noviembre de 2019, su objetivo es competir con plataformas como Netflix y HBO, proporcionando un catálogo de alta calidad creado por destacados creadores de la industria. Además, se puede acceder a Apple TV+ desde varios dispositivos, lo que permite disfrutar de su contenido en cualquier lugar."
    }
];

export default function Parati() {
    const navigation = useNavigation();

    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}>
                {productos.map((item, index) => (
                    <CardParaTi key={index} {...item} />
                ))}
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
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 44,
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
        borderTopColor: "#444",
    },
    iconColumn: {
        alignItems: "center",
    },
    navText: {
        fontSize: 12,
        marginTop: 2,
        color: "#fff",
    },
});
