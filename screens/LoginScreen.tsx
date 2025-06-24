import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Entypo from '@expo/vector-icons/Entypo';


export default function LoginScreen( {navigation}: any ) {
  return (
    <View style={styles.container}>
      <Text style={ [ styles.txt , {fontSize: 80}] }>Login</Text>

      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Calculadora") }>
        <View style={styles.fila}>
            <Text style={styles.txt}>Ir a Calculadora</Text>
            <Entypo name="login" size={40} color="#6e0b75" />
        </View>
        
        <Image source={ require("../assets/images/calcu.png")}  style={styles.img}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ed7d7d",
        flex:1
    },
    txt:{
        color: 'white',
        fontSize:40
    },
    btn:{
        backgroundColor: "#666",
        width: "89%",
        height: 150,
        alignItems: 'center',
        borderRadius: 50,
        padding:20
    },
    img:{
        width: 60,
        height:60
    },
    fila:{
        flexDirection: 'row-reverse'
    }
})