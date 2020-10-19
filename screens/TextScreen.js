import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function TextScreen() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text style={styles.text}>Enter Name: </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter name"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.name}>My name is: {name}</Text>
            <br />
            <Text style={styles.text}>Enter Password: </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter password"
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 4 ? (
                <Text style={styles.password}>
                    Password Strength: <Text style={styles.weak}>Weak</Text>
                </Text>
            ) : password.length < 8 ? (
                <Text style={styles.password}>
                    Password Strength: <Text style={styles.strong}>Strong</Text>
                </Text>
            ) : password.length < 30 ? (
                <Text style={styles.password}>
                    Password Strength:{" "}
                    <Text style={styles.veryStrong}>Very Strong</Text>
                </Text>
            ) : null}
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        margin: 15,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
    },
    name: {
        fontWeight: "bold",
        marginLeft: 15,
    },
    password: {
        fontWeight: "bold",
        marginLeft: 15,
    },
    weak: {
        backgroundColor: "#dc3546",
        color: "white",
        padding: 8,
        borderRadius: 20,
    },
    strong: {
        backgroundColor: "#fec107",
        color: "#222",
        padding: 8,
        borderRadius: 20,
    },
    veryStrong: {
        backgroundColor: "#27a844",
        color: "white",
        padding: 8,
        borderRadius: 20,
    },
});
