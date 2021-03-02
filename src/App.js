import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Boards from '@/Screen/Boards';
import Kanban from '@/Screen/Kanban';
import CardView from '@/Screen/CardView';

// export default class App extends React.Component {
  
//   render() {

//     const Stack = createStackNavigator();
//     const Tab = createBottomTabNavigator();
    
//     return (
//       // <SafeAreaView style={{ flex: 1, backgroundColor: 'orange' }}>
//       //   <Boards />
//       // </SafeAreaView>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Boards" >
//           <Stack.Screen name="Boards" component={Boards} />
//           {/* <Stack.Screen name="Kanban" component={Kanban} options={{headerShown: false}}/> */}
//           <Stack.Screen name="Kanban" component={Kanban} />

//           <Stack.Screen name="CardView" component={CardView} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }


export default function App() {
  
    const [userToken, setUserToken] = useState('');

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    
    return (
      // <SafeAreaView style={{ flex: 1, backgroundColor: 'orange' }}>
      //   <Boards />
      // </SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Boards" >
          <Stack.Screen name="Boards" component={Boards} />
          {/* <Stack.Screen name="Kanban" component={Kanban} options={{headerShown: false}}/> */}
          <Stack.Screen name="Kanban" component={Kanban} />

          <Stack.Screen name="CardView" component={CardView} />
        </Stack.Navigator>
      </NavigationContainer>
    );

}