import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Email from '@/Screen/Email';

export default function BoardContainer() {

    const Stack = createStackNavigator();
  
    return (
        <Stack.Navigator initialRouteName="Email">
            <Stack.Screen name="Email" component={Email} />
        </Stack.Navigator>
    );
  };