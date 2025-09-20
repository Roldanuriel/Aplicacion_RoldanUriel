import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CardV3({ titulo, contenido, precio, imagen }) {
    return (
        <View style={style.card}>
            <Image style={style.imagen} source={{ uri: imagen }} />
            <View style={style.cardC}>
                <Text style={style.Titulo}>{titulo}</Text>
                <Text style={style.cont}>{contenido}</Text>
                <Text style={style.cont}>{precio}</Text>
                <TouchableOpacity style={style.botonG}>
                    <Text style={style.textoBotonG}>Boton</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#3ddda0ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 },
        width: '90%', 
        alignSelf: 'center',
    },
    cardC: {
        padding: 16,
        backgroundColor: '#010403ff',

    },
    Titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#ffffffff',
    },
    cont: {
        fontSize: 16,
        color: '#ffffffff',
        marginBottom: 12,


    },
    imagen: {
        width: '100%',
        height: 180,
        
        resizeMode: 'cover',
    },
    botonG: {
        marginTop: 10,
        backgroundColor: '#f7f7f7ff',
        paddingVertical: 14,
        paddingHorizontal:18,
        borderRadius: 10,
        alignSelf:'flex-start',
    },
    textoBotonG: {
        textAlign: 'center',
        color: '#000000ff',
        fontWeight:'bold',
        fontSize:12,

    },
});