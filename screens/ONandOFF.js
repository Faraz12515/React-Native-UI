import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class ONandOFF extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { id: 1, name: "Faraz" },
        { id: 2, name: "Talha" },
      ],
      toggle: true,
    };
  }

  _onPress() {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  }

  render() {
    const { toggle } = this.state;
    const textValue = toggle;
    const buttonBg = toggle ? "dodgerblue" : "white";
    const textColor = toggle ? "white" : "black";

    return (
      <View style={styles.container}>
        {this.state.data.map((item) => (
          <View>
            <TouchableOpacity
              onPress={() => this._onPress()}
              style={{
                marginTop: 10,
                backgroundColor: buttonBg,
                height: 60,
                width: 60,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderRadius: 40,
              }}
            >
              <Text
                style={{ fontSize: 20, color: textColor, textAlign: "center" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
});
