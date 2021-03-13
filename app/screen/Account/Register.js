import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Toast from 'react-native-easy-toast';
import RegisterForm from '../../components/Account/RegisterForm';
import Loading from '../../components/Loading';

export default function Register() {
    const [loading, setLoading] = useState(false);
    const toastRef = useRef()

    return (
        <ScrollView centerContent={true} style={styles.viewBody} >
            {loading === true && <Loading isVisible={true} text="Cargando" />}
            <Image source={{ uri: "https://tinyurl.com/3fd8r7ra" }} resizeMode="contain" style={styles.image} />
            <Text style={styles.title} >Mudkip</Text>
            <Text style={styles.description} >¡I'm a pokemon!</Text>
            <View style={styles.styleForm}>
                <RegisterForm toastRef={toastRef} setLoading={setLoading} />
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9} style={styles.toastStyle} />
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
    toastStyle: {
        backgroundColor: "red"
    },
    description: {
        fontSize: 16,
        textAlign: "center"
    }
})