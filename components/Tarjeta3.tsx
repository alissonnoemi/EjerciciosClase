import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta3(props: any) {
    const [visible, setVisible] = useState(false)
    const peli = props.informacion

    return (
        <View>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Text>{peli.titulo}</Text>
                <Image style={styles.img} source={{ uri: peli.imagen }} />
            </TouchableOpacity>
            <Modal visible={visible} animationType="slide" transparent={false}>
                <View style={styles.modal}>
                    
                    <Text style={styles.titulo}>{peli.titulo}</Text>
                    <Text>Director: {peli.director}</Text>
                    <Text>Año: {peli.anio}</Text>
                    <Text>Opiniones: {peli.opiniones.opniones_positivas}</Text>
                    <Text style={styles.desc}>{peli.descripcion}</Text>
                    <Button title='Cerrar' onPress={() => setVisible(false)} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    modal: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    desc: {
        marginTop: 10,
        fontStyle: 'italic',
        textAlign: 'center',
    }
})