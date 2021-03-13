import React, { useState } from 'react'
import { Button, StyleSheet, ToastAndroid, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase'
import { Icon, Input } from 'react-native-elements';
import { isEmpty } from 'lodash';

export default function LoginForm({ toastRef, setLoading }) {
    const [login, setLogin] = useState({});
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation();

    const handleSubmit = () => {
        console.log(login);

        if (isEmpty(login.email) || isEmpty(login.password)) {
            if (isEmpty(login.email)) {
                toastRef.current.show('Introduzca su correo');
            } else {
                toastRef.current.show('Introduzca una contraseña');
            }
        } else {
            setLoading(true);
            firebase.auth().signInWithEmailAndPassword(login.email, login.password)
                .then(() => {
                    setLoading(false);
                    navigation.navigate('Cuentas');
                })
                .catch(() => {
                    setLoading(false);
                    toastRef.current.show('Error al autenticar usuario');
                })
        }
    }

    const handleChange = (e, alt) => {
        setLogin({
            ...login,
            [alt]: e.nativeEvent.text
        })
        console.log(login)
    }

    return (
        <View style={styles.viewContainer}>
            <Input
                placeholder="Correo electrónico"
                keyboardType="email-address"
                textContentType="emailAddress"
                containerStyle={styles.inputLogin}
                onChange={(e) => handleChange(e, 'email')}
                rightIcon={
                    <Icon
                        type='material-community'
                        name='email'
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                textContentType="password"
                password={true}
                secureTextEntry={!showPassword ? true : false}
                containerStyle={styles.inputLogin}
                onChange={(e) => handleChange(e, 'password')}
                rightIcon={
                    <Icon
                        type='material-community'
                        iconStyle={styles.iconRight}
                        name={showPassword ? "lock-outline" : "lock-question"}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Iniciar sesion"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnReg}
                onPress={() => handleSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        marginBottom: 30
    },
    btnContainer: {
        width: "70%",
        backgroundColor: "#00a680",
        marginTop: 30
    },
    btnReg: {
        backgroundColor: "red"
    },
    iconRight: {
        color: "#a1a1a1"
    },
    btnContainer: {
        backgroundColor: "#cacaca",
        width: "50%"
    },
    btnStyle: {
        color: "violet",
        width: "50%"
    }
})