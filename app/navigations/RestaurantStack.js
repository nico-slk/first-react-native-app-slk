import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../screen/Restaurants';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Restaurant" component={Restaurants} options={{ "title": "Restaurantes" }} />
        </Stack.Navigator>
    )
}
