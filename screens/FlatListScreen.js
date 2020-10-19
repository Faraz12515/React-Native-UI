import React, { useState } from 'react';
import { View, ScrollView, Text, FlatList, StyleSheet } from 'react-native';

export default function FlatListScreen() {
    const [people, setPeople] = useState([
        { name: 'Faraz', key: 1 },
        { name: 'Ali', key: 2 },
        { name: 'Talha', key: 3 },
        { name: 'Noor', key: 4 },
        { name: 'Fareed', key: 5 },
        { name: 'Saif', key: 6 },
        { name: 'Rafay', key: 7 },
    ])
    return (
        <View style={styles.container}>
            {/* <ScrollView>
                {
                    people.map((item) => (
                        <View key={item.key}>
                            <Text style={styles.item}>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView> */}

            <FlatList
                numColumns={2}
                data={people}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (<Text style={styles.item}>{item.name}</Text>)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        paddingTop: 40,
        color: 'white',
        paddingHorizontal: 20
    },
    item: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 30,
        marginTop: 24
    }
})
