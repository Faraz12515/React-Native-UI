import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Icons() {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30, marginLeft: 20 }}>
                <View style={styles.iconContainer}><AntDesign name="edit" size={30} color='white' style={styles.icons} /><Text style={styles.iconText}>Word of the day</Text></View>
                <View style={styles.iconContainer}><FontAwesome5 name="history" size={30} color='white' style={styles.icons} /><Text style={styles.iconText}>History</Text></View>
                <View style={styles.iconContainer}><Entypo name="star" size={30} color="white" style={styles.icons} /><Text style={styles.iconText}>Bookmarks</Text></View>
                <View style={styles.iconContainer}><FontAwesome name="random" size={30} color="white" style={styles.icons} /><Text style={styles.iconText}>Random word</Text></View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',

    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    icons: {
        backgroundColor: 'blue',
        marginVertical: 5,
        padding: 7,
        borderRadius: 50
    },
    iconText: {
        color: '#fff',
        fontSize: 18,
        marginHorizontal: 20,
        marginTop: 15,

    },
    iconContainer: {
        flexDirection: "row",
    }
});
