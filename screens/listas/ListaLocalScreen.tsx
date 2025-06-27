import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import datos from "../../assets/data/futurama.json";
import { Tarjeta } from '../../components/Tarjeta';


export default function ListaLocalScreen() {

    return (
        <View>
            <Text>ListaLocalScreen</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) =>
                    <Tarjeta informacion={item} />

                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 30,
    },
    img: {
        width: 100,
        height: 100,
    }
})