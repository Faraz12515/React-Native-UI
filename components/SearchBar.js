import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: '#f0eeee',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});
