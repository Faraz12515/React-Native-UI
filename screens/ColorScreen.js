import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default function ColorScreen({ navigation }) {
	const [colors, setColors] = useState([]);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title='Add a Color'
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>
			<br />
			<Button onPress={() => navigation.openDrawer()} title='Open Drawer' />
			<br />
			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View
							style={{ height: 100, width: 100, backgroundColor: item }}
						></View>
					);
				}}
			/>
		</View>
	);
}

const randomRgb = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	return `rgb(${red},${green},${blue})`;
};
