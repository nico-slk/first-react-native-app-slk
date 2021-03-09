import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../screen/Search';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top 5" component={Search} options={{ "title": "Buscar" }} />
        </Stack.Navigator>
    )
}