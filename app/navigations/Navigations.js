import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";

import FavoritesStack from './FavoritesStack';
import TopStack from './TopStack';
import AccountStack from './AccountStack';
import SearchStack from './SearchStack';
import RestaurantStack from './RestaurantStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    const screenOptions = (route, color) => {
        let iconName;
        switch (route.name) {
            case 'restaurants':
                iconName = 'compass-outline'
                break;

            default:
                break;
        }
        return <Icon type="material-community" name={iconName} size={22} color={color} />
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{ inactiveTintColor: "pink", activeTintColor: "red", }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen name="restaurants" component={RestaurantStack} options={{ "title": "Restaurantes" }} />
                <Tab.Screen name="favorites" component={FavoritesStack} options={{ "title": "Favoritos" }} />
                <Tab.Screen name="account" component={AccountStack} options={{ "title": "Cuenta" }} />
                <Tab.Screen name="topRestaurants" component={TopStack} options={{ "title": "Top 5" }} />
                <Tab.Screen name="search" component={SearchStack} options={{ "title": "Buscar" }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}