import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Accelerometer, Gyroscope } from 'expo-sensors'

export default function SensorsScreen() {
  const [accelerometerData, setAccelerometerData] = useState({ x: 0, y: 0, z: 0 })
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 })

  useEffect(() => {
    const accelerometerSubscription = Accelerometer.addListener((data) => setAccelerometerData(data))
    const gyroscopeSubscription = Gyroscope.addListener((data) => setGyroscopeData(data))

    Accelerometer.setUpdateInterval(500)
    Gyroscope.setUpdateInterval(500)

    return () => {
      accelerometerSubscription.remove()
      gyroscopeSubscription.remove()
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensors Data</Text>
      <Text>Accelerometer:</Text>
      <Text>X: {accelerometerData.x.toFixed(2)}</Text>
      <Text>Y: {accelerometerData.y.toFixed(2)}</Text>
      <Text>Z: {accelerometerData.z.toFixed(2)}</Text>

      <Text>Gyroscope:</Text>
      <Text>X: {gyroscopeData.x.toFixed(2)}</Text>
      <Text>Y: {gyroscopeData.y.toFixed(2)}</Text>
      <Text>Z: {gyroscopeData.z.toFixed(2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
})
