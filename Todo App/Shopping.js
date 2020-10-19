import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';

export default function Shopping() {
	const [newItems, setNewItems] = useState([]);
	const [items, setItems] = useState([
		{ id: uuidv4(), name: 'Faraz' },
		{ id: uuidv4(), name: 'Noor' },
		{ id: uuidv4(), name: 'Talha' },
		{ id: uuidv4(), name: 'Hamza' },
		{ id: uuidv4(), name: 'Shahroz' },
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id != id);
		});
	};

	const addItems = (newItems) => {
		Alert.alert('Error', 'Please enter an item', { newItems: 'Ok' });

		setItems((prevItems) => {
			return [{ id: uuidv4(), newItems }, ...prevItems];
		});
	};

	const onChange = (textValue) => setNewItems(textValue);

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Shopping List</Text>

			<View>
				<TextInput
					placeholder='Add Item...'
					onChangeText={onChange}
					style={styles.input}
				/>
				<TouchableOpacity style={styles.btn} onPress={() => addItems(newItems)}>
					<Text style={styles.btnText}>
						<View style={{ textAlignVertical: 'center' }}>
							<Ionicons name='ios-add' size={26} color='darkslateblue' />
						</View>{' '}
						Add Item
					</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				style={{ paddingTop: 10 }}
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.listItems}>
						<View style={styles.listItemsView}>
							<Text style={styles.listItemsText}>{item.name}</Text>
							<FontAwesome5
								name='trash'
								size={24}
								color='black'
								onPress={() => deleteItem(item.id)}
							/>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 5,
		backgroundColor: '#222',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 500,
		padding: 10,
		textAlign: 'center',
		backgroundColor: 'slateblue',
	},
	listItems: {
		padding: 15,
		backgroundColor: '#f8f8f8',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',

		fontSize: 18,
		fontWeight: 400,
		color: '#222',
	},
	listItemsView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	listItemsText: {
		flexDirection: 'row',
		justifyContent: 'center',

		fontSize: 18,
		fontWeight: 400,
		color: '#222',
	},

	//Styling for Add Item...
	input: {
		height: 60,
		padding: 8,
		fontSize: 16,
		color: '#f8f8f8',
	},
	btn: {
		backgroundColor: '#c2bad8',
		padding: 9,
		margin: 5,
	},
	btnText: {
		color: 'darkslateblue',
		fontSize: 20,
		textAlign: 'center',
	},
});
