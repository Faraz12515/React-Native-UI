import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

export default function SquareScreen() {

    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <Text style={styles.squareText}>Square Screen</Text>
            <br />
            <br />
            <ColorCounter onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_INCREMENT)} color='Red' />
            <ColorCounter onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_INCREMENT)} color='Blue' />
            <ColorCounter onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_INCREMENT)} color='Green' />
            <br />
            <View style={{ height: 200, width: 200, marginHorizontal: 670, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    squareText: {
        fontSize: 22,
        fontWeight: "bold",
        color: 'teal',
        textAlign: "center",
        borderBottomWidth: 3,
        borderBottomColor: 'black'
    }
})
