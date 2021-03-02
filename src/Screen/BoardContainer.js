import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Boards from '@/Screen/Boards';
import Kanban from '@/Screen/Kanban';
import CardView from '@/Screen/CardView';

export default function BoardContainer() {

    const Stack = createStackNavigator();
  
    return (
        <Stack.Navigator initialRouteName="Boards">
            <Stack.Screen name="Boards" component={Boards} />
            <Stack.Screen name="Kanban" component={Kanban} />
            <Stack.Screen name="CardView" component={CardView} />
        </Stack.Navigator>
    );
  };