import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BoardContainer from '@/Screen/BoardContainer';
import EmailContainer from '@/Screen/EmailContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {

    const Tab = createBottomTabNavigator();
  
    return (
        <Tab.Navigator
        initialRouteName="Boards"
        tabBarOptions={{
          activeTintColor: '#3DC274',
        }}
      >
        <Tab.Screen 
          name="Boards" 
          component={BoardContainer} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Email" 
          component={EmailContainer} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      );
  };