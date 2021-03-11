import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import RegisterForm from '../../components/Account/RegisterForm';

export default function Register() {
    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            <Image source={{ uri: "https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Register</Text>
            <View style={styles.styleForm}>
                <RegisterForm />
            </View>
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
    styleForm: {

    }
})