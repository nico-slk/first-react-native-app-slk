import React, { useRef } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-easy-toast';
import LoginForm from '../../components/Account/LoginForm';

const CreateAccount = () => {
    const navigation = useNavigation();
    const toastRef = useRef();

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
            <Image source={{ uri: "https://tinyurl.com/2dxmc4e3" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Fat-Face</Text>
            <Text style={styles.description} >¡ hEnLlo !</Text>
            {/* <Toast ref={toastRef} position="center" opacity={0.9} /> */}
            <View style={styles.viewContainer}>
                <LoginForm />
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
        marginTop: 30,
    },
    btnRegister: {
        color: "#00a680",
        fontWeight: "bold"
    },
    divider: {
        backgroundColor: "#00a680",
        marginBottom: 30
    },
    description: {
        fontSize: 16,
        textAlign: "center"
    }
})