import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment': return { ...state, count: state.count + action.payload }
		case 'decrement': return { ...state, count: state.count - action.payload }
		default: return state;
	}
};

export default function CounterScreen({ navigation }) {
	const [state, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text style={{ fontSize: 30 }}>Current Count: {state.count}</Text>
			<Button
				title='Increase'
				onPress={() => {
					dispatch({ type: 'increment', payload: 1 })
				}}
			/>
			<br />
			<Button
				title='Decrease'
				onPress={() => {
					if (state.count === 0) { return }
					dispatch({ type: 'decrement', payload: 1 })
				}}
			/>
			<br />
			<Button onPress={() => navigation.openDrawer()} title='Open Drawer' />
		</View>
	);
}
