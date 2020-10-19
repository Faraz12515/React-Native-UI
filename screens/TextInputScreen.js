import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function TextInputScreen({ navigation }) {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Enter Name:</Text>
			<TextInput
				style={styles.Input}
				autoCapitalize='none'
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => setName(newValue)}
			/>
			<Text style={styles.text}>My name is {name}</Text>
			<br />
			<br />
			<Text style={styles.text}>Enter Password:</Text>
			<TextInput
				style={styles.Input}
				autoCapitalize='none'
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 4 ? (
				<Text style={{ fontSize: 20 }}>Password must be 4 characters</Text>
			) : null}
			<Button onPress={() => navigation.openDrawer()} title='Open Drawer' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	Input: {
		margin: 15,
		borderWidth: 1,
		borderColor: 'black',
	},
	text: {
		fontSize: 30,
	},
});
