import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements';
import { validateEmail } from '../../utils/validations';


export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({});

    const handleSubmit = () => {
        console.log(data);
        console.log(validateEmail(data.email));
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
        backgroundColor: "red",
        marginTop: 20
    },
    btnRegister: {
        backgroundColor: "red"
    },
    iconRight: {
        color: "#a1a1a1"
    }
})