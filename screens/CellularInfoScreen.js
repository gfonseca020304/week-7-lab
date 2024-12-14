import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as Cellular from 'expo-cellular'

export default function CellularInfoScreen() {
  const [carrier, setCarrier] = useState('Unknown')
  const [generation, setGeneration] = useState('Unknown')

  useEffect(() => {
    setCarrier(Cellular.carrier || 'Unknown')
    setGeneration(Cellular.cellularGeneration || 'Unknown')
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cellular Network Info</Text>
      <Text>Carrier: {carrier}</Text>
      <Text>Connection Generation: {generation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
})
