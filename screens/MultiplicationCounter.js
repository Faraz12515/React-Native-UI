import React, { useReducer } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + action.payload }
        case 'decrement': return { ...state, count: state.count - action.payload }
        case 'reset': return { ...state, count: state.count = 0 }
        default: return state
    }
}


export default function MultiplicationCounter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View>
            <Text style={styles.counter}>Multiplication Counter : {state.count}</Text>
            <Button title='Increase Multiples of 3' onPress={() => {
                dispatch({ type: 'increment', payload: 3 })
            }} />
            <Button title='Decrease Multiples of 3' onPress={() => {
                if (state.count === 0) { return; }
                dispatch({ type: 'decrement', payload: 3 })
            }} />
            <Button title='Reset' onPress={() => dispatch({ type: 'reset', payload: 0 })} />
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        textAlign: 'center',
        fontSize: 22,
        backgroundColor: '#222',
        color: 'white'
    }
})