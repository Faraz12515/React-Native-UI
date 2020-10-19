import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
	// const openMenu = () => {
	// 	navigation.openDrawer()
	// }

	return (
		<View style={styles.container}>
			{/* <MaterialIcons name='menu' size={28} color='white' onPress={() => navigation.openDrawer()} style={styles.icon} />
			<View >
				<Text style={styles.text}>My Home</Text>
			</View> */}
			<Text style={styles.text}>Home Screen</Text>
			<Button
				title="Open Drawer"
				onPress={() => {
					navigation.openDrawer();
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#222",
	},
	text: {
		color: "white",
		fontSize: 20,
	},
	icon: {
		position: "absolute",
		left: 16,
	},
});
