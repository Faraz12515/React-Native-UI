import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	Image,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import {
	FontAwesome,
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
	Entypo,
	AntDesign,
} from '@expo/vector-icons';

export default function WhatsAppList({ navigation }) {
	const Data = [
		{
			id: 1,
			name: 'Ghupshup khul ke',
			msg: 'Noor: Sab apply kero',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			icon: (
				<Entypo
					name='pin'
					size={14}
					color='white'
					style={{
						zIndex: 1111,
						position: 'absolute',
						right: 3.8,
						top: 4,
					}}
				/>
			),
			time: 'Yesterday',
		},
		{
			id: 2,
			name: 'Uni Boys',
			msg: 'Ahmed: Anyone active?',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			icon: (
				<Entypo
					name='pin'
					size={14}
					color='white'
					style={{
						zIndex: 1111,
						position: 'absolute',
						right: 3.8,
						top: 4,
					}}
				/>
			),
			time: '11:50 AM',
		},
		{
			id: 3,
			name: 'BSSE Evening Batch 2017',
			msg: 'Zaman changed this grroup settings to allow only admins',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			icon: (
				<Entypo
					name='pin'
					size={14}
					color='white'
					style={{
						zIndex: 1111,
						position: 'absolute',
						right: 3.8,
						top: 4,
					}}
				/>
			),
			time: '11:30 AM',
		},
		{
			id: 4,
			name: 'Talha Mansoor',
			msg: 'Phool pattay',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			icon: (
				<MaterialCommunityIcons
					name='numeric-2-circle'
					size={26}
					color='#0ac744'
					style={{
						zIndex: 1111,
						position: 'absolute',
						bottom: 0.1,
						right: 0.1,
						left: 0.1,
					}}
				/>
			),
			time: '5:30 AM',
		},
		{
			id: 5,
			name: 'Zakir Bhai',
			msg: 'App ajao isha k baad mein a jaun ga',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			time: '3:20 AM',
		},
		{
			id: 6,
			name: 'Job opportunities',
			msg: '+923482158966',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			time: '2:00 PM',
		},
		{
			id: 7,
			name: 'Client FB',
			msg: 'How are you?',
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),
			time: '6:00 PM',
		},
		{
			id: 8,
			name: 'Shuja',
			msg: <MaterialIcons name='photo' size={18} color='grey' />,
			image: (
				<Image
					source={require('../assets/user.png')}
					style={{ width: 70, height: 70 }}
				/>
			),

			time: '9:15 AM',
		},
	];
	const [active, setActive] = useState(0); // active 0 hai set?
	return (
		<View style={styles.container}>
			<View
				style={{
					width: '100%',
					backgroundColor: '#075e55',
					paddingTop: 5,

					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<View style={{ paddingLeft: 16 }}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: '#cee2e0',
						}}
					>
						WhatsApp
					</Text>
				</View>
				<View style={{ flexDirection: 'row', paddingTop: 4 }}>
					<Text style={{ paddingRight: 20 }}>
						<AntDesign name='search1' size={18} color='#b6d9d5' />
					</Text>
					<Text style={{ paddingRight: 15 }}>
						<MaterialCommunityIcons
							name='dots-vertical'
							size={18}
							color='#b6d9d5'
						/>
					</Text>
				</View>
			</View>
			<View
				style={{
					height: 40,
					width: '100%',

					flexDirection: 'row',

					alignItems: 'center',
					justifyContent: 'space-between',
					// paddingVertical: 10,

					backgroundColor: '#075e55',
					marginTop: -2,
				}}
			>
				<View
					style={{
						flex: 2,
						alignItems: 'center',
						justifyContent: 'center',
					}} //set???? are yar ye to baught mushkil hai, main aik  month baad aya tha in sb pr....  us say pehlay sirf ui pr tha. mgre tumhain dikhana zrurui tha isi liye dikhaya... k js ui main kaisay use hoti hai hmmmm... abhi sir fhum ui pr rhaingay phir chhotti chhotti logics pdr kaam kraingay. jb yar is ko simple tarike se new component per kerna pare ga mujhe, abhiu mt kro baad main kraingay. sahince refernce k liye rkho isay. mainay pehlia baar yeh lgaanay main 3 ghntay lgaaye thay... :D   achaaa... yep sb aahisat aahosta horta hai   ab ??? aab tum woh wali screen bnana jo mainay di thi. or isay or acha kr sktay ho.
					//
				>
					<FontAwesome name='camera' size={19} color='#81afaa' />
				</View>

				{['CHAT', 'STATUS', 'CALLS'].map((v, i) => {
					return (
						<TouchableOpacity
							style={{ flex: 3, height: '100%' }}
							onPress={() => setActive(i)}
						>
							<Text
								style={{
									color: '#cee2e0',
									fontSize: 16,
									//paddingRight: 30,
									fontWeight: 500,
									flex: 1,
									alignItems: 'center',
									justifyContent: 'center',
									height: '100%',
									textAlign: 'center',
									paddingTop: 10,
									borderBottomWidth: active == i ? 3 : 0,
									borderBottomColor: active == i ? '#fff' : '#075e55',
								}}
							>
								{v}
							</Text>
						</TouchableOpacity>
					);
				})}

				{/* <Text
					style={{
						color: '#cee2e0',
						fontSize: 16,
						// paddingRight: 30,
						flex: 1,
						fontWeight: 500,
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						textAlign: 'center',
						paddingTop: 10,
					}}
				>
					STATUS
				</Text>
				<Text
					style={{
						color: '#cee2e0',
						fontSize: 16,
						// paddingRight: 30,
						fontWeight: 500,
						// backgroundColor: 'red',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						height: '100%',
						textAlign: 'center',
						paddingTop: 10,
					}}
				>
					CALLS
				</Text> */}
			</View>

			<FlatList
				showsVerticalScrollIndicator={false}
				data={Data}
				renderItem={({ item }) => (
					<View style={styles.chatContainer}>
						<View style={styles.item}>
							<View style={styles.logoIcon}>
								<Text>{item.image}</Text>
								<Text style={styles.name}>{item.name}</Text>
								<Text style={styles.msg}>{item.msg}</Text>
							</View>

							<View style={styles.icon}>
								<Text style={{ fontSize: 12 }}>{item.time}</Text>
								<View
									style={{
										backgroundColor: '#ccc',
										height: 23,
										width: 23,
										borderRadius: 360,
										marginTop: 5,
									}}
								>
									{item.icon}
								</View>
							</View>
						</View>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('ChatApp');
				}}
				style={styles.msgButton}
			>
				<MaterialCommunityIcons
					name='android-messages'
					size={22}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item: {
		flex: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',

		fontSize: 24,
		padding: 5,
		backgroundColor: '#fff',
		color: 'white',

		marginTop: 12,
		marginHorizontal: 5,
		marginVertical: 10,
	},
	chatContainer: {
		backgroundColor: '#fff',
		color: 'white',

		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',

		borderBottomWidth: 0.3,
		borderBottomColor: '#ccc',
	},

	logoIcon: {
		textAlignVertical: 'center',
		flexDirection: 'row',
		paddingLeft: 1,
	},
	name: {
		fontSize: 17,
		fontWeight: 650,

		alignItems: 'center',
		paddingLeft: 4,
		marginTop: 14,
	},
	msg: {
		width: '100%',
		position: 'absolute',
		zIndex: 1111,

		marginTop: 37,
		marginLeft: 75,

		fontSize: 14,
		color: '#222',
	},
	icon: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 8,
	},
	msgButton: {
		height: 62,
		width: 62,
		backgroundColor: '#0ac744',

		justifyContent: 'center',
		alignItems: 'center',

		borderRadius: 360,

		position: 'absolute',
		zIndex: 1111,
		right: 20,
		bottom: 23,

		shadowColor: '#000',
		shadowOffset: {
			width: 2.5,
			height: 9,
		},
		shadowOpacity: 0.14,
		shadowRadius: 8.76,

		elevation: 10,
	},
});
