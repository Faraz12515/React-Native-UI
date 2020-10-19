import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	FlatList,
	TouchableOpacity,
} from "react-native";

export default function WhatsAppChat() {
	const [user1, setUser1Text] = useState("");
	const [user2, setUser2Text] = useState("");
	const [visible1, setVisible1] = useState(false);
	const [visible2, setVisible2] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.messageBox}>
				<View
					style={{
						justifyContent: "flex-end",
						alignItems: "flex-end",
						marginTop: 15,
					}}
				>
					<Text style={{ color: "#222" }}>
						{visible1 === true ? (
							<Text
								style={{
									textAlign: "right",
									alignItems: "center",
									justifyContent: "center",

									backgroundColor: "#E2FFC7",
									padding: 8,
									borderRadius: 100 / 2,
								}}
							>
								{user1}
							</Text>
						) : null}
					</Text>
				</View>
				<View
					style={{
						justifyContent: "flex-start",
						alignItems: "flex-start",
						marginTop: 10,
					}}
				>
					<Text style={{ color: "#222" }}>
						{visible2 === true ? (
							<Text
								style={{
									textAlign: "right",
									alignItems: "center",
									justifyContent: "center",

									backgroundColor: "#fff",
									padding: 8,
									borderRadius: 100 / 2,
								}}
							>
								{user2}
							</Text>
						) : null}
					</Text>
				</View>
			</View>
			<View style={{ marginTop: 100 }}>
				<TextInput
					style={{ padding: 7 }}
					placeholder="Type a message"
					value={user1}
					onChangeText={(newVal) => setUser1Text(newVal)}
				/>
				<TouchableOpacity
					onPress={() => setVisible1(true)}
					style={{
						justifyContent: "center",
						alignItems: "center",
						width: 120,
						padding: 10,
						borderRadius: 20,
						backgroundColor: "#222",
					}}
				>
					<Text
						style={{
							textAlign: "center",
							color: "#fff",
							fontSize: 18,
						}}
					>
						User1 msg
					</Text>
				</TouchableOpacity>
				<View style={{ marginTop: 100 }}>
					<TextInput
						style={{ padding: 7 }}
						placeholder="Type a message"
						value={user2}
						onChangeText={(newVal) => setUser2Text(newVal)}
					/>
					<TouchableOpacity
						onPress={() => setVisible2(true)}
						style={{
							justifyContent: "center",
							alignItems: "center",
							width: 120,
							padding: 10,
							borderRadius: 20,
							backgroundColor: "#222",
						}}
					>
						<Text
							style={{
								textAlign: "center",
								color: "#fff",
								fontSize: 18,
							}}
						>
							User2 msg
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	messageBox: {
		height: 300,
		width: 500,
		backgroundColor: "#222",
		borderColor: "dodgerblue",
		borderWidth: 2,
	},
});
