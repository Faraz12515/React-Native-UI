import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';


export default function ColorCounter({ color, onIncrease, onDecrease }) {
    return (
        <View>
            <Text style={styles.colors}>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increase Red ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrease Red ${color}`} />
        </View>
    )
}

const styles = StyleSheet.create({
    colors: {
        fontSize: 18,
        color: 'teal',
        fontWeight: "bold",
        textAlign: "center"
    }
})