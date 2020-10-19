import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
} from "react-native";
import {
	FontAwesome5,
	MaterialCommunityIcons,
	MaterialIcons,
	SimpleLineIcons,
	FontAwesome,
	Ionicons,
	AntDesign,
	Entypo,
} from "@expo/vector-icons";

export default function Ubuntu() {
	return (
		<View style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ImageBackground
					source={require("../assets/ubuntu.jpg")}
					style={styles.image}
				>
					<View style={styles.iconContainer}>
						<Text style={styles.icon}>
							<FontAwesome5
								name="ubuntu"
								size={30}
								color="#de4815"
							/>
						</Text>
						<Text style={styles.icon}>
							<SimpleLineIcons
								name="drawer"
								size={30}
								color="#ccc"
							/>
						</Text>
						<Text style={styles.icon}>
							<FontAwesome
								name="chrome"
								size={30}
								color="#588adc"
							/>
						</Text>
						<Text style={styles.icon}>
							<FontAwesome5
								name="tools"
								size={30}
								color="#afafaf"
							/>
						</Text>
						<Text style={styles.icon}>
							<MaterialCommunityIcons
								name="adobe-acrobat"
								size={30}
								color="red"
							/>
						</Text>

						<Text style={styles.icon}>
							<FontAwesome name="book" size={30} color="teal" />
						</Text>
						<Text style={styles.icon}>
							<Ionicons
								name="logo-whatsapp"
								size={30}
								color="#43c654"
							/>
						</Text>
						<Text style={styles.icon}>
							<FontAwesome
								name="youtube-play"
								size={30}
								color="red"
							/>
						</Text>
						<Text style={styles.trash}>
							<Entypo name="trash" size={30} color="#afafaf" />
						</Text>
					</View>

					<View style={styles.googleContainer}>
						<View style={styles.googleOkGoogleMic}>
							<Text style={styles.google}>
								<AntDesign
									name="google"
									size={18}
									color="#65696b"
								/>
							</Text>
							<Text style={styles.okGoogle}>Say "OK Google"</Text>

							<Text style={styles.mic}>
								<FontAwesome
									name="microphone"
									size={15}
									color="#65696b"
								/>
							</Text>
						</View>
					</View>
					<View style={styles.timeContainer}>
						<Text style={styles.time}>02:48 PM</Text>
						<Text style={styles.date}>Tuesday, June 16, 2020</Text>
					</View>
				</ImageBackground>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	text: {
		color: "#fff",
	},
	icon: {
		paddingTop: 15,
		paddingLeft: 10,
	},
	iconContainer: {
		height: "100%",
		width: 50,
		backgroundColor: "#400a22",
	},
	trash: {
		paddingTop: 250,
		paddingLeft: 10,
		// paddingBottom: 15,
		//talha yar mein generator set ker k aya wait...set ajao
		position: "absolute",
		bottom: 15,
		zIndex: 1111,
	},

	googleContainer: {
		position: "absolute",
		right: 64,
		top: 50,

		height: 40,
		width: 240,
		borderRadius: 40,

		backgroundColor: "#e2e4e3",
	},
	googleOkGoogleMic: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10.5,
	},
	google: {
		flexDirection: "row",
		justifyContent: "center",
		paddingRight: 95,
		width: 5,
	},
	okGoogle: {
		color: "#c3b7c1",
		fontWeight: "400",

		paddingRight: 5,
		marginTop: -1,
		paddingLeft: -15,
		textAlign: "center",
	},
	mic: {
		flexDirection: "row",
		justifyContent: "center",
		paddingLeft: 3,
	},
	timeContainer: {
		position: "absolute",
		right: 69,
		top: 100,

		height: 80,
		width: 230,
		borderRadius: 10,

		backgroundColor: "#d7d9d8",
	},
	time: {
		fontSize: 35,
		fontWeight: 400,
		color: "#fff",

		paddingTop: 7,
		paddingLeft: 10,
	},
	date: {
		fontSize: 15,
		color: "#585983",
		paddingLeft: 19,
	},
});
