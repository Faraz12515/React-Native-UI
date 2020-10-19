import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
} from "react-native";

export default function TextInputPractice() {
	const [name, setName] = useState("Faraz");
	const [age, setAge] = useState(23);
	const [like, setLike] = useState(0);
	const [visible, setVisible] = useState(false);

	// function Name(v) {
	// 	setName(v);
	// }

	return (
		<View style={styles.container}>
			<Text style={styles.name}>
				Enter Name:{" "}
				<TextInput
					placeholder="e.g. Jon Doe"
					KeyboardType="default"
					onChangeText={(val) => setName(val)}
					style={styles.inputName}
				/>{" "}
			</Text>
			<Text style={styles.age}>
				Enter Age:{" "}
				<TextInput
					placeholder="e.g. 37"
					KeyboardType="numeric"
					onChangeText={(val) => setAge(val)}
					style={styles.inputAge}
				/>{" "}
			</Text>
			<Text style={styles.result}>
				<Text style={{ paddingRight: 10 }}>
					Name:{" "}
					{visible == true && (
						<Text style={{ color: "purple" }}>{name}</Text>
					)}
				</Text>
				<Text style={{ paddingLeft: 10 }}>
					{" "}
					Age: <Text style={{ color: "teal" }}>{age}</Text>
				</Text>
				<TouchableOpacity
					style={{ backgroundColor: "#222", padding: 10, width: 100 }}
					onPress={() => setVisible(true)}
				>
					<Text style={{ textAlign: "center", color: "#fff" }}>
						Name
					</Text>
				</TouchableOpacity>
			</Text>
			<View>
				<Text
					style={{ fontSize: 22, fontWeight: "500", marginTop: 18 }}
				>
					This Post has{" "}
					<Text style={{ color: "dodgerblue" }}>{like}</Text>
				</Text>
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<TouchableOpacity
						style={{
							backgroundColor: "dodgerblue",
							padding: 10,
							width: 100,
							borderRadius: 20,
						}}
						onPress={() => setLike(like + 1)}
					>
						<Text style={{ color: "#fff" }}>Like</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		textAlign: "center",
	},
	name: {
		fontSize: 18,
	},
	age: {
		fontSize: 18,
		marginTop: 15,
	},
	inputName: {
		borderWidth: 1,
		borderColor: "#afafaf",
		padding: 10,
	},
	inputAge: {
		borderWidth: 1,
		borderColor: "#afafaf",
		padding: 10,
		marginLeft: 15,
	},
	result: {
		fontSize: 22,
		fontWeight: "500",
		marginTop: 18,
	},
});
