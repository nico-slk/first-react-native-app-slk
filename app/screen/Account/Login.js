import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';

const CreateAccount = () => {
    const navigation = useNavigation();

    return (
        <Text style={styles.description} >
            ¿Aun no tienes una cuenta? {" "}
            <Text style={styles.btnRegister} onPress={() => navigation.navigate('Register')} >Registrate</Text>
        </Text>
    )
}

export default function Login() {

    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            <Image source={{ uri: "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ" }} resizeMode="contain" style={styles.image} />
            <View style={styles.viewContainer}>
                <Text style={styles.title} >Login</Text>
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.description} >Social Login</Text>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
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
        textAlign: "center",
        marginBottom: 30
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#00a680",
        marginBottom: 30
    }
})