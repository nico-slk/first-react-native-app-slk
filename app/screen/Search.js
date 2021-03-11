import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';


export default function Search() {

    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            <Image source={{ uri: "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Maar</Text>
            <Text style={styles.description} >asda</Text>
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