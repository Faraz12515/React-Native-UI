import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, Overlay } from "react-native-elements";

// react-native-elements isay add krao  pkg hai add krao isay npm
// project restart kro. Faraz????!!!!

export default function ModalScreen() {
	const [visible, setVisible] = useState(false);

	return (
		<View>
			<TouchableOpacity>
				<Button
					title="Click Me"
					onPress={() => setVisible(!visible)}
				></Button>
			</TouchableOpacity>
			{visible == true ? (
				<Overlay isVisible={visible}>
					<Text>Hello from Overlay!</Text>
				</Overlay>
			) : null}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "grey",
	},
	modalContent: {
		height: "50%",
		width: "70%",
	},
});
