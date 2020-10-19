import React from 'react'
import { View, Button } from 'react-native';

export default function AdditionCounter({ onIncrease, onDecrease, onReset }) {
    return (
        <View>
            <Button onPress={() => onIncrease()} title='Increase Counter' />
            <Button onPress={() => onDecrease()} title='Decrease Counter' />
            <Button onPress={() => onReset()} title='Reset ' />
        </View>
    )
}
