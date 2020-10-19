import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";

export default class TextInputMap extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: ["Faraz", "Talha"],
			visible: "",
		};
		const { visible } = this.state;
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					placeHolder="e.g. Jon Doe"
					onChangeText={(newText) => this.setState({ text: newText })}
				/>
				<View>
					{this.state.text.map((v, i) => {
						return (
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<TouchableOpacity
									style={{
										backgroundColor: "dodgerblue",
										padding: 10,
										width: 100,
										borderRadius: 5,

										justifyContent: "center",
										alignItems: "center",
										marginTop: 5,
									}}
									onPress={() =>
										setState({ visible: this.state.text })
									}
								>
									<Text
										style={{
											marginVertical: 10,
											fontSize: 20,
											color: "#fff",
											textAlign: "center",
										}}
									>
										{v}
									</Text>
								</TouchableOpacity>
								<Text>
									{this.state.visible === i ? (
										<Text
											style={{
												marginVertical: 10,
												fontSize: 20,
												color: "#222",
												textAlign: "center",
											}}
										>
											{v}
										</Text>
									) : null}
								</Text>
							</View>
						);
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#afafaf",
		padding: 10,
		marginVertical: 10,
		marginTop: 10,
	},
});
