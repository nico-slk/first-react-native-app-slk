import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function TopRestaurants() {

    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            <Image source={{ uri: "https://tinyurl.com/3pya99wu" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Skinny</Text>
            <Text style={styles.description} >¡Eat this!</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        paddingBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
        marginTop: 40
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center"
    },
    description: {
        fontSize: 16,
        textAlign: "center"
    }
})