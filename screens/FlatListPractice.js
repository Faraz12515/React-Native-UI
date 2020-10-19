import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import {
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
} from '@expo/vector-icons';

export default function FlatListPractice({ navigation }) {
	const Data = [
		{
			id: 1,
			name: 'Facebook',
			logoIcon: <FontAwesome name='facebook-f' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 2,
			name: 'Twitter',
			logoIcon: <FontAwesome name='twitter' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 3,
			name: 'WhatsApp',
			logoIcon: <Ionicons name='logo-whatsapp' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 4,
			name: 'Instagram',
			logoIcon: <FontAwesome name='instagram' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 5,
			name: 'Google',
			logoIcon: <FontAwesome name='google' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 6,
			name: 'Youtube',
			logoIcon: <FontAwesome name='youtube-play' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 7,
			name: 'Chrome',
			logoIcon: <FontAwesome name='chrome' size={24} color='black' />,
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
		{
			id: 8,
			name: 'Visual Studio Code',
			logoIcon: (
				<MaterialCommunityIcons
					name='visual-studio-code'
					size={24}
					color='black'
				/>
			),
			icon: <Ionicons name='ios-arrow-forward' size={20} color='black' />,
		},
	];

	return (
		<View style={styles.container}>
			<FlatList
				data={Data}
				renderItem={({ item }) => (
					<View
						style={{
							backgroundColor: '#f6f6f6',
							color: 'white',

							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',

							borderBottomWidth: 0.3,
							borderBottomColor: '#222',
						}}
					>
						<View style={styles.item}>
							<View style={styles.logoIcon}>
								<Text>{item.logoIcon}</Text>
								<Text style={styles.name}>{item.name}</Text>
							</View>
							<View style={styles.icon}>{item.icon}</View>
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

					justifyContent: 'center',
					alignItems: 'center',

					borderRadius: 360,

					position: 'absolute',
					zIndex: 1111,
					right: 30,
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
		backgroundColor: '#f6f6f6',
	},
	item: {
		flex: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',

		fontSize: 24,
		padding: 5,
		backgroundColor: '#f6f6f6',
		color: 'white',

		marginTop: 15,
		marginHorizontal: 8,
		marginVertical: 10,
	},
	logoIcon: {
		textAlignVertical: 'center',
		flexDirection: 'row',
		paddingHorizontal: 5,
	},
	name: {
		paddingLeft: 15,
		marginTop: 2.5,
		fontWeight: '500',
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
});
