import { StyleSheet, Text, View, Image, Platform, StatusBar } from 'react-native'
import React from 'react'
import Botones from '../components/Botones'

export default function Principal() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Principal</Text>
            <Text >Aplicacion de Roldan Uriel Arcadio Avila</Text>
            <Image style={styles.img} source={{ uri: 'https://a-static.besthdwallpaper.com/apple-logo-white-background-wallpaper-5120x2048-88226_100.jpg' }} />
            <Botones />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Arial',
        color: '#000000ff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop: '50%',
    },
})
