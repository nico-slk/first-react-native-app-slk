import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screen/Account/Account';
import Login from '../screen/Account/Login';
import Register from '../screen/Account/Register';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cuentas" component={Account} options={{ "title": "Cuentas" }} />
            <Stack.Screen name="Login" component={Login} options={{ "title": "Login" }} />
            <Stack.Screen name="Register" component={Register} options={{ "title": "Register" }} />
        </Stack.Navigator>
    )
}