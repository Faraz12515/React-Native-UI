import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../routes/Header";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Entypo,
	AntDesign,
	Foundation,
} from "@expo/vector-icons";

export default function YoutubeMenu() {
	return (
		<View
			style={{
				backgroundColor: "#212121",
				width: "100%",
				height: "100%",
			}}
		>
			<Header />

			<View style={styles.container}>
				<View style={{ paddingLeft: 20, paddingTop: 10 }}>
					<View style={styles.iconAndText}>
						<Entypo name="home" size={22} style={styles.icons} />
						<Text style={styles.text}>Home</Text>
					</View>
					<View style={styles.iconAndText}>
						<MaterialCommunityIcons
							name="fire"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>Trending</Text>
					</View>
					<View style={styles.subscriptionConatiner}>
						<MaterialIcons
							name="subscriptions"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.subscriptionText}>
							Subscription
						</Text>
					</View>
					<View style={styles.iconAndText}>
						<MaterialIcons
							name="video-library"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>library</Text>
					</View>
					<View style={styles.iconAndText}>
						<MaterialIcons
							name="history"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>History</Text>
					</View>

					<View style={styles.iconAndText}>
						<MaterialIcons
							name="access-time"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>Watch later</Text>
					</View>
					<View style={styles.iconAndText}>
						<AntDesign
							name="like1"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>Liked videos</Text>
					</View>
					<View style={styles.iconAndText}>
						<MaterialIcons
							name="keyboard-arrow-down"
							size={22}
							style={styles.icons}
						/>
						<Text style={styles.text}>Show more</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#212121",
		width: 240,
		height: "100%",
	},
	text: {
		color: "#ededed",
		fontWeight: 500,

		paddingLeft: 25,
		paddingTop: 3,
	},
	icons: {
		color: "#909090",
		fontSize: 24,
		paddingLeft: 5,
	},
	iconAndText: {
		flexDirection: "row",
		paddingTop: 20,
	},
	subscriptionConatiner: {
		flexDirection: "row",
		borderBottomColor: "#333333",
		borderBottomWidth: 1.5,
		paddingTop: 20,
	},
	subscriptionText: {
		color: "#e1e1e1",
		fontWeight: 500,

		paddingLeft: 25,
		paddingTop: 3,
		paddingBottom: 28,
	},
});
