import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { HeaderHeightContext } from '@react-navigation/stack';



export default function Layout() {
    return (
        <View style={styles.container}>
            <View style={styles.red}><Text style={styles.redText}><Button title='RED' color='red' onPress={() => alert('Hello Red')} /></Text></View>
            <View style={styles.blue}><Text style={styles.blueText}>BLUE</Text></View>
            <View style={styles.orange}><Text style={styles.orangeText}>ORANGE</Text></View>
            <View style={styles.green}><Text style={styles.greenText}>GREEN</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'


    },
    red: {
        flex: 0.5,
        backgroundColor: 'red',
        padding: 50,
        height: 50,
        width: 50

    },

    blue: {
        flex: 0.5,
        backgroundColor: 'blue',
        padding: 50,
        height: 50,
        width: 50
    },
    orange: {
        flex: 0.5,
        backgroundColor: 'orange',
        padding: 50,
        height: 50,
        width: 50
    },
    green: {
        flex: 0.5,
        backgroundColor: 'green',
        padding: 50,
        height: 50,
        width: 50
    },
    redText: {
        color: 'white',
        fontSize: 20,


    },
    blueText: {
        color: 'white',
        fontSize: 20,


    },
    orangeText: {
        color: 'white',
        fontSize: 20,


    },
    greenText: {
        color: 'white',
        fontSize: 20,


    },
});