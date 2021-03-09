import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screen/Account';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top 5" component={Account} options={{ "title": "Cuenta" }} />
        </Stack.Navigator>
    )
}