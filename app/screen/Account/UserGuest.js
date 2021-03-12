import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

export default function UserGuest() {
    const [state, setState] = useState(0);
    const navigation = useNavigation();

    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            <Image source={{ uri: "https://tinyurl.com/4mbjnben" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Estado: {state}</Text>
            <Text style={styles.title} >Hunter</Text>
            <Text style={styles.description} >Te voy a morder</Text>
            <View style={styles.viewBtn}>
                <Button buttonStyle={styles.btnStyle} containerStyle={styles.btnContainer} title="Estado +1 " onPress={() => setState(state + 1)} />
                <Button buttonStyle={styles.btnStyle} containerStyle={styles.btnContainer} title="Navegar a Login" onPress={() => navigation.navigate("Login")} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30
    },
    image: {
        height: 300,
        width: "100%",
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
    },
    viewBtn: {
        flex: 1,
        alignItems: "center",
        marginBottom: 30
    },
    btnStyle: {
        backgroundColor: "red",
        marginTop: 20
    },
    btnContainer: {
        width: "70%"
    },
})