import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import HomeScreen from "./HomeScreen";

export default class Loader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loader: true,
		};
	}
	componentWillMount() {
		setTimeout(() => {
			this.setState({ loader: false });
		}, 3500);
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.loader ? (
					<View>
						<Text
							style={{
								color: "#fff",

								fontSize: 36,
								fontWeight: "500",

								justifyContent: "center",
								textAlign: "center",

								paddingBottom: 20,
							}}
						>
							Welcome To React Native!
						</Text>
						<ActivityIndicator size={50} color="dodgerblue" />
					</View>
				) : (
					<HomeScreen />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#222",
	},
});
