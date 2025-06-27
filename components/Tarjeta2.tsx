import { Button, Image, Modal, SectionListComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {
    console.log (props.informacion.homePlanet)
    const [visible, setvisible] = useState(false)
    return (
        <View>
            <TouchableOpacity onPress={() => setvisible(true)}>
                <Text>{props.informacion.name}</Text>
                <Image style={styles.img} source={{ uri: props.informacion.image }} />
            </TouchableOpacity>
            <Modal visible={visible} animationType="slide" transparent={false}>
                <View style={styles.modal}>
                    <Button title='cerrar' onPress={() => setvisible(false)} />
                    <Text>{props.informacion.name}</Text>
                    <Text>{props.informacion.ocupation}</Text>
                    <Text>{props.informacion.homePlanet}</Text>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    modal: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})