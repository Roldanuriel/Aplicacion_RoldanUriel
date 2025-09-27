import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function CardProducto({ titulo, contenido, precio, imagen, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagen }} style={styles.imagen} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{contenido}</Text>
      <Text style={styles.precio}>{precio}</Text>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.btnEditar} onPress={onEdit}>
          <Text style={styles.textoBtn}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEliminar} onPress={onDelete}>
          <Text style={styles.textoBtn}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0a0909ff',
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
    padding: 12,
  },
  imagen: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#ffffffff',
  },
  descripcion: {
    fontSize: 16,
    color: '#e4e2e2ff',
    marginBottom: 6,
  },
  precio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnEditar: {
    backgroundColor: '#f0ad4e',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  btnEliminar: {
    backgroundColor: '#d9534f',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  textoBtn: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
