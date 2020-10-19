import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

export default class LoaderScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loader: true,
		};
	}
	componentWillMount() {
		setTimeout(() => {
			this.setState({ loader: false });
		}, 2000);
	}
	render() {
		return (
			<View style={styles.container}>
				{this.state.loader ? (
					<ActivityIndicator size="large" color="#0000ff" />
				) : null}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
});
