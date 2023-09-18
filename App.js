import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';

import DrawerNav from './Pages/DrawerNav';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown:false}} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default App