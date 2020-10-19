import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Header({ navigation }) {
	return (
		<View style={StyleSheet.header}>
			<View style={{ paddingBottom: 10, paddingTop: 10 }}>
				<View
					style={{
						zIndex: 1111,
						position: "absolute",
						paddingLeft: 90,
					}}
				>
					<Text style={styles.headerText}>
						YouTube
						<sup
							style={{
								color: "#989898",
								fontSize: 11,
								fontWeight: 500,
								paddingLeft: 3,
							}}
						>
							PK
						</sup>
					</Text>
				</View>
				<View>
					<Text>
						<MaterialIcons
							name="menu"
							size={24}
							color="white"
							style={styles.menu}
						/>
					</Text>
					<Text>
						<FontAwesome5
							name="youtube"
							size={23}
							color="#fe0000"
							style={styles.youtube}
						/>
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "flex-end",
					}}
				>
					<Text style={{ paddingRight: 25 }}>
						<MaterialIcons
							name="video-call"
							size={24}
							color="#fff"
						/>
					</Text>
					<Text style={{ paddingRight: 25 }}>
						<MaterialIcons name="apps" size={24} color="#fff" />
					</Text>
					<Text style={{ paddingRight: 60 }}>
						<MaterialIcons
							name="notifications-active"
							size={24}
							color="#fff"
						/>
					</Text>
					<View
						style={{
							zIndex: 1111,
							position: "absolute",
							right: 6,
							bottom: 1,
						}}
					>
						<Image
							source={require("../assets/deadpool.png")}
							style={{ width: 30, height: 30, borderRadius: 40 }}
						/>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: "100%",

		flexDirection: "row",
	},
	headerText: {
		flexDirection: "row",
		textAlign: "left",
		// paddingLeft: 90,

		fontSize: 18,
		fontWeight: 600,

		color: "#fff",
		letterSpacing: -1,
	},
	menu: {
		position: "absolute",
		left: 10,
		paddingTop: 1,
	},
	youtube: {
		position: "absolute",
		left: 61,
		paddingTop: 1,
	},
});
