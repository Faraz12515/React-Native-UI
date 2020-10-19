import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default class ColorChange extends Component {
	state = {
		data: ["Faraz", "Faraz", "Faraz", "Ali", "Faraz"],
		isOn: "",
	};
	render() {
		return (
			<View style={styles.app}>
				<View>
					{this.state.data.map((v, i) => {
						return (
							<TouchableOpacity
								style={{
									backgroundColor:
										this.state.isOn === i ? "#fff" : "pink",

									justifyContent: "center",
									alignItems: "center",
									borderRadius: 40,

									height: 60,
									width: 60,
									marginTop: 5,
								}}
								onPress={() => this.setState({ isOn: i })}
							>
								<Text
									style={{
										color:
											this.state.isOn === i
												? "#222"
												: "#222",
										marginVertical: 10,
										textAlign: "center",
										fontSize: 16,
									}}
								>
									{v}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: "#222",
		alignItems: "center",
		justifyContent: "center",
	},
});
