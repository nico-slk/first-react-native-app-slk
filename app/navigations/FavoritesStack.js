import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screen/Favorites';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurant" component={Favorites} options={{ "title": "Favoritos" }} />
        </Stack.Navigator>
    )
}