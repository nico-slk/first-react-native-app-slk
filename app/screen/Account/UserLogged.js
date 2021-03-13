import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'react-native-elements';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/Loading';
import InfoUser from './InfoUser';

export default function UserLogged() {
    const [loading, setLoading] = useState(false);
    const [userInfo, setUserInfo] = useState({})
    const toastRef = useRef()

    useEffect(() => {

        (async () => {
            try {
                const user = await firebase.auth().currentUser;
                await setUserInfo(user)
            } catch (error) {
                console.error(error)
            }
        })()

    }, [])

    return (
        <View style={styles.viewStyle} >
            {loading && <Loading isVisible={loading} text="Cargando" />}
            {console.log(loading)}
            {userInfo ? <InfoUser info={userInfo} /> : <Text>Cargando datos del usuario</Text>}
            <Text>Account Options</Text>

            <Button
                title="Cerrar sesión"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                style={styles.btnSimple}
                onPress={() => firebase.auth().signOut()}
            />
            <Toast ref={toastRef} position='center' opacity={0.9} />
        </View>
    )

}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
    },
    btnContainerRegister: {
        width: "70%",
        marginTop: 20
    },
    btnRegister: {
        backgroundColor: "red"
    }
})