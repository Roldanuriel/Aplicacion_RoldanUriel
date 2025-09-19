import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Botones() {
    return (
        <TouchableOpacity style={styles.btnI}>
            <Text style={styles.btnT}>Iniciar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnI: {
        width: 200,
        padding: 10,
        backgroundColor: '#1b5a33ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop:'50%',
    },
    btnT: {
        color: '#ffffffff',  
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
})
