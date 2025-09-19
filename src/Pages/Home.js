import { StyleSheet, Text, View, Image, Platform, StatusBar} from 'react-native'
import React from 'react'
import Botones from '../components/Botones'

export default function Principal() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Principal</Text>
            <Image style={styles.img} source={{ uri: 'https://tse2.mm.bing.net/th/id/OIP.sJe7VRGUvRx60rVSycZBFAHaHW?rs=1&pid=ImgDetMain&o=7&rm=3' }} />
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
        color: '#ffffffff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 20,
        marginTop:'50%',
    },
})
