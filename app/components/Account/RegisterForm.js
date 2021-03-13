import React, { useState } from 'react';
import { isEmpty, size } from 'lodash';
import { Button, Icon, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { validateEmail } from '../../utils/validations';
import * as firebase from 'firebase';

export default function RegisterForm({ toastRef, setLoading }) {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({});
    const navigation = useNavigation();


    const handleSubmit = () => {
        console.log(data);
        if (isEmpty(data.email) || isEmpty(data.password) || isEmpty(data.repassword)) {
            // alert('No deben haber campos vacios');
            toastRef.current.show('No deben haber campos vacios');
        } else {
            if (!validateEmail(data.email)) {
                // alert('Formato de correo incorrecto');
                toastRef.current.show('Formato de correo incorrecto');
            } else {
                if (size(data.password) < 6) {
                    // alert('Las contraseñas es muy corta');
                    toastRef.current.show('Las contraseñas es muy corta');
                } else {
                    if (data.password !== data.repassword) {
                        // alert('Las contraseñas no coinciden');
                        toastRef.current.show('Las contraseñas no coinciden');
                    } else {
                        setLoading(true);
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword(data.email, data.password)
                            .then(() => {
                                setLoading(false);
                                navigation.navigate("Top 5");
                            })
                            .catch(() => {
                                setLoading(false);
                                toastRef.current.show('El correo ya está en uso')
                            })
                    }
                }
            }
        }
    }

    const handleChange = (e, alt) => {
        setData({
            ...data,
            [alt]: e.nativeEvent.text
        });
    }

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChange={(e) => handleChange(e, 'email')}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="email"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                textContentType="password"
                password={true}
                onChange={(e) => handleChange(e, 'password')}
                secureTextEntry={showPassword ? false : true}
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "lock-outline" : "lock-question"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Repetir contraseña"
                textContentType="password"
                password={true}
                onChange={(e) => handleChange(e, 'repassword')}
                secureTextEntry={true}
                containerStyle={styles.inputForm}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="lock"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={handleSubmit}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        marginBottom: 30
    },
    btnContainerRegister: {
        width: "70%",
        backgroundColor: "blue",
        marginTop: 20
    },
    btnRegister: {
        backgroundColor: "red"
    },
    iconRight: {
        color: "#a1a1a1"
    }
})