import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import AdditionCounter from '../components/AdditionCounter';

export default function AdditionScreen() {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Text style={styles.addScreen}>Addition Screen</Text>
            <AdditionCounter onIncrease={() => setCounter(counter + 1)} onDecrease={() => { if (counter === 0) { return; } setCounter(counter - 1) }} onReset={() => setCounter(0)} />
            <Text style={styles.counter}>Counter : {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    addScreen: {
        textAlign: 'center',
        fontSize: 24,
        backgroundColor: '#222',
        color: 'pink'
    },
    counter: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#222',
        color: 'pink'
    }
})
