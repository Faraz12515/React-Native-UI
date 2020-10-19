import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import {
	FontAwesome,
	Ionicons,
	FontAwesome5,
	MaterialIcons,
	AntDesign,
	Entypo,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const Data = [
	{
		name: 'Doucment Cloud',
		id: 1,
		icon: (
			<Ionicons name='ios-arrow-forward' size={20} color='#1f1f1' style={{}} />
		),
		logoIcon: (
			<MaterialCommunityIcons name='adobe-acrobat' size={24} color='black' />
		),
	},
	{
		name: 'Google Drive',
		id: 2,
		icon: <MaterialIcons name='add' size={20} color='#1f1f1f' />,
		logoIcon: <Entypo name='google-drive' size={24} color='black' />,
	},
	{
		name: 'Dropbox',
		id: 2,
		icon: <MaterialIcons name='add' size={20} color='#1f1f1' />,
		logoIcon: <FontAwesome name='dropbox' size={24} color='black' />,
	},
	{
		name: 'Browse more files',
		id: 2,
		logoIcon: <FontAwesome name='folder-open' size={24} color='#1f1f1' />,
	},
];

export default function FlatListIcons({ navigation }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={Data}
				renderItem={({ item }) => (
					<View
						style={{
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-between',
							backgroundColor: 'pink',
							borderBottomWidth: 0.5,
							borderBottomColor: '#1f1f1f',
						}}
					>
						<View style={styles.item}>
							<View style={styles.logoIcon}>
								<Text>{item.logoIcon}</Text>
								<Text style={{ paddingLeft: 20 }}>{item.name}</Text>
							</View>
						</View>
						<View
							style={{
								flex: 0.5,
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: 5,
							}}
						>
							<Text>{item.icon}</Text>
						</View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				onPress={() => {
					navigation.openDrawer();
				}}
				style={{
					height: 70,
					width: 70,
					backgroundColor: '#222',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 360,
					position: 'absolute',
					zIndex: 1111,
					right: 20,
					bottom: 60,
				}}
			>
				<MaterialIcons name='add' size={30} color='#fff' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
	},
	item: {
		flex: 6,

		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		fontSize: 24,

		marginTop: 10,
		marginVertical: 4,
		marginHorizontal: 8,
	},
	logoIcon: {
		textAlignVertical: 'center',
		flexDirection: 'row',
	},
});
