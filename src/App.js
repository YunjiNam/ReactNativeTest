import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './Screen/Home';
import SignInScreen from './Screen/SignIn';

export const AuthContext = React.createContext();

export default function App({ navigation }) {
  
    const [userToken, setUserToken] = useState('');
    const [state, dispatch] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
            };
          case "SIGN_OUT":
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
            };
        }
      },
      {
        isLoading: true,
        isSignout: false,
        userToken: null,
      }
    );

    useEffect(() => {
      const bootstrapAsync = async () => {
        let userToken;

        try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
          console.log('error', e);
        }

        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      };

      bootstrapAsync();
    },[]);

    const authContext = React.useMemo(
      () => ({
        signIn: async data => {
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' }),
        signUp: async data => {
          dispatch({ type: 'SUGN_IN', token: 'dummy-auth-token '});
        },
      }),
      []
    );

    const Stack = createStackNavigator();
    
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: 'orange' }}>
      //   <Boards />
      // </SafeAreaView>
      <NavigationContainer>
        <AuthContext.Provider value={authContext}>
          <Stack.Navigator initialRouteName="Boards" >
            {state.userToken == null ? (
              <Stack.Screen name="SignIn" component={SignInScreen} />
            ) : (
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    );

}