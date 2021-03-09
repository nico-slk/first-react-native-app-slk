import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import FavoritesStack from './FavoritesStack'
import TopStack from './TopStack'
import AccountStack from './AccountStack';
import SearchStack from './SearchStack';
import RestaurantStack from './RestaurantStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Restaurants" component={RestaurantStack} options={{ "title": "Restaurantes" }} />
                <Tab.Screen name="Favorites" component={FavoritesStack} options={{ "title": "Favoritos" }} />
                <Tab.Screen name="Account" component={AccountStack} options={{ "title": "Cuenta" }} />
                <Tab.Screen name="TopRestaurants" component={TopStack} options={{ "title": "Top 5" }} />
                <Tab.Screen name="Search" component={SearchStack} options={{ "title": "Buscar" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}