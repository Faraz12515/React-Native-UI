import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default class Info extends Component {
	state = {
		data: ["Faraz", "Talha"],
		price: ["$20", "$30"],
		isOn: "",
		isVisible: "",
	};
	render() {
		return (
			<View style={styles.container}>
				<View>
					{this.state.data.map((v, i) => {
						return (
							<TouchableOpacity
								onPress={() => this.setState({ isOn: i })}
								style={{
									justifyContent: "center",
									alignItems: "center",

									borderRadius: 40,

									height: 70,
									width: 70,
									marginTop: 10,

									backgroundColor:
										this.state.isOn === i ? "#222" : "pink",
								}}
							>
								<Text
									style={{
										color:
											this.state.isOn === i
												? "pink"
												: "#222",
										fontSize: 20,
										fontWeight: "400",
										textAlign: "center",
									}}
								>
									{v}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
				<View>
					{this.state.price.map((a, i) => {
						return (
							<TouchableOpacity
								onPress={() => this.setState({ isVisible: i })}
								style={{
									justifyContent: "center",
									alignItems: "center",

									borderRadius: 10,
									height: 70,
									width: 100,
									marginTop: 10,
									paddingHorizontal: 2,
									backgroundColor:
										this.state.isVisible === i
											? "#222"
											: "pink",
								}}
							>
								<Text
									style={{
										color:
											this.state.isVisible === i
												? "pink"
												: "#222",
										fontSize: 20,
										fontWeight: "400",
										textAlign: "center",
									}}
								>
									Price: {a}
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
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
});
