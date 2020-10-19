import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {
	FontAwesome,
	FontAwesome5,
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
	Entypo,
	AntDesign,
} from '@expo/vector-icons';

export default function MessengerChat() {
	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<View style={styles.profile}>
					<Image
						source={require('../assets/user.png')}
						style={{ width: 40, height: 40 }}
					/>

					<View style={{ paddingTop: 6 }}>
						<Text style={styles.profileText}>Chats</Text>
					</View>
					<View style={styles.icons}>
						<Text style={{ paddingRight: 15 }}>
							<FontAwesome
								name='camera'
								size={13}
								color='#222'
								style={{
									backgroundColor: '#f3f3f3',
									padding: 6,
									borderRadius: 40,
								}}
							/>
						</Text>
						<Text style={{ paddingRight: 5 }}>
							<FontAwesome5
								name='pen'
								size={13}
								color='#222'
								style={{
									backgroundColor: '#f3f3f3',
									padding: 6,
									borderRadius: 40,
								}}
							/>
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.search}>
				<Text>Search</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	top: {
		width: '100%',
	},
	search: {
		width: '50%',
	},
	profile: {
		flexDirection: 'row',
		paddingTop: 5,
		paddingLeft: 10,
	},
	profileText: {
		textAlign: 'center',
		paddingLeft: 5,
		fontSize: 20,
		fontWeight: 700,
	},
	icons: {
		width: '100%',
		paddingLeft: '50%',
		paddingTop: 9,
		flexDirection: 'row',
	},
});
