import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopRestaurants from '../screen/TopRestaurants';

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Top 5" component={TopRestaurants} options={{ "title": "Top 5" }} />
        </Stack.Navigator>
    )
}