import React from 'react';
import { StyleSheet, View, Text, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CardV3 from '../components/Card';



const Inicio = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <View style={styles.appBar}>
                
                <Text style={styles.title}>Para Ti</Text>
                <View style={{ width: 20 }} />
            </View>

            <ScrollView
                style={{ width: '100%' }}
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 80 }} 
            >
                <CardV3

                    titulo="Explora Apple intelligence"
                    contenido="Ven a conocerlo en una sesion"
                    precio="gratis en Apple Store"
                    imagen="https://cdn.arstechnica.net/wp-content/uploads/2024/06/apple_intelligence_hero-760x380.jpg"
                />
                <CardV3
                    titulo="Obten 3 meses gratis de Apple Music"
                    contenido="Incluido en la compra de."
                    precio="productos Apple elegibles"
                    imagen="https://9to5mac.com/wp-content/uploads/sites/6/2021/08/apple-music-logo-2021-9to5mac.jpg?resize=1024"
                />
                <CardV3
                    titulo="Apple TV+"
                    contenido="Espectacolor."
                    precio="Desde $19,999"
                    imagen="https://www.tvguide.com/a/img/hub/2019/03/26/d5ad9a49-1b28-4e2a-835b-4ed54ad332cf/190325-appletv.jpg"
                />
            </ScrollView>

            
                        {/* Navbar */}
                        <View style={styles.navbar}>
                            {/* Para ti */}
                            <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("ParaTi")}>
                                <FontAwesome name="th-large" size={20} color="#fff" />
                                <Text style={styles.navText}>Para ti</Text>
                            </TouchableOpacity>
                            {/* Productos */}
                            <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Inicio")}>
                                <View style={styles.iconRow}>
                                    <FontAwesome name="laptop" size={20} color="#fff" style={{ marginRight: 4 }} />
                                    <FontAwesome name="mobile" size={20} color="#fff" />
                                </View>
                                <Text style={styles.navText}>Productos</Text>
                            </TouchableOpacity>
                            {/* Conocer más */}
                           <TouchableOpacity style={styles.iconColumn} onPress={() => navigation.navigate("Formulario")}>
                                <FontAwesome name="apple" size={20} color="#fff" />
                                <Text style={styles.navText}>Inventario</Text>
                            </TouchableOpacity>
                            {/* busqueda */}
                            <TouchableOpacity style={styles.iconColumn}>
                                <FontAwesome name="search" size={20} color="#fff" />
                                <Text style={styles.navText}>busqueda</Text>
                            </TouchableOpacity>
                            {/* Bolsa */}
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
    },
    appBar: {
        
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
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