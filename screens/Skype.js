import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function Skype() {
	return (
		<View style={styles.container}>
			<View style={styles.welcomeScreen}>
				<View
					style={{
						marginTop: 10,

						justifyContent: "center",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
					<Image
						source={require("../assets/skype.png")}
						style={{
							resizeMode: "cover",
							width: 30,
							height: 30,
						}}
					/>
					<Text
						style={{
							textAlign: "center",
							alignItems: "center",
							justifyContent: "center",

							paddingLeft: 4,

							color: "#fff",
							fontSize: 20,
							fontWeight: "500",
						}}
					>
						Skype
					</Text>
				</View>
				<View style={styles.welcomeFaraz}>
					<Text style={styles.welcomeText}>Welcome, faraz</Text>

					<Image
						source={require("../assets/deadpool.png")}
						style={styles.avatar}
					/>
					<View style={styles.textAndPen}>
						<Text style={{ paddingBottom: 5 }}>
							<Text style={{ color: "#ababab" }}>
								Tell your friends what you are up to
							</Text>
							<Text style={{ paddingLeft: 15 }}>
								<SimpleLineIcons
									name="pencil"
									size={20}
									color="#ababab"
								/>
							</Text>
						</Text>
					</View>

					<View style={styles.conversationButton}>
						<TouchableOpacity
							style={{
								padding: 10,
								borderRadius: 40,
								color: "#222",
								backgroundColor: "#fff",
							}}
						>
							<Text style={{ fontWeight: "700" }}>
								{" "}
								Start a conversation
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.conversationText}>
						<Text
							style={{
								color: "#ababab",
								fontWeight: "500",
							}}
						>
							Search for someone to start chatting with or go to{" "}
							<Text style={{ paddingLeft: 55 }}>
								{" "}
								Contacts to see who is available.
							</Text>
						</Text>
					</View>
					<View style={styles.signedIn}>
						<Text
							style={{
								color: "#fff",
								fontWeight: "500",
							}}
						>
							You are signed in as{" "}
							<Text style={{ fontStyle: "italic" }}>
								+92 3152174051
							</Text>
						</Text>
						<Text
							style={{
								textAlign: "center",
							}}
						>
							<Text style={{ color: "#ababab" }}>Try </Text>
							<Text style={{ color: "dodgerblue" }}>
								switching accounts
							</Text>{" "}
							<Text style={{ color: "#ababab" }}>
								if you do not see your contacts or conversation
								history.
							</Text>
						</Text>
						<Text
							style={{
								color: "dodgerblue",
								fontWeight: "500",
								fontSize: 16,
								paddingTop: 5,
								borderBottomWidth: 0.5,
								borderBottomColor: "dodgerblue",
							}}
						>
							Learn more
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},

	welcomeScreen: {
		backgroundColor: "#222",
		position: "absolute",
		zIndex: 1111,
		right: 0,
		height: "100%",
		width: "100%",
	},
	welcomeFaraz: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "-70%",
	},
	welcomeText: {
		alignItems: "center",
		justifyContent: "center",

		color: "whitesmoke",
		fontSize: 36,
		fontWeight: "500",
		letterSpacing: 0.5,
	},
	textAndPen: {
		marginTop: 30,
		borderBottomWidth: 1.2,
		borderBottomColor: "white",
		paddingLeft: 20,
		paddingRight: 5,
	},
	avatar: {
		resizeMode: "cover",

		width: 100,
		height: 100,
		marginTop: 18,

		borderRadius: 360,
	},
	input: {
		height: 50,
		width: 300,

		borderBottomWidth: 1,
		borderBottomColor: "#fff",
	},
	conversationText: {
		width: 320,
		marginTop: 22,
	},
	conversationButton: {
		marginTop: 30,
	},
	signedIn: {
		position: "absolute",
		zIndex: 1111,
		bottom: 18,
		justifyContent: "center",
		alignItems: "center",
	},
});
