import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta3 from '../../components/Tarjeta3'

export default function ListaNueva() {
  const [datos, setDatos] = useState([])

  async function leer() {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/peliculas3.json"
    );
    const json = await resp.json();
    setDatos(json.peliculas); 
  }

  useEffect(() => {
    leer();
  }, []);

  return (
    <View>
      <Text>ListaNueva</Text>
      <FlatList
        data={datos}
        renderItem={({ item }) => <Tarjeta3 informacion={item} />}
        
      />
    </View>
  )
}

const styles = StyleSheet.create({})