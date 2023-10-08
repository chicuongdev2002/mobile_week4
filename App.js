import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Frame1g from './src/component/Frame1g';
import Frame1h from './src/component/Frame1h';
import Frame1e from './src/component/Frame1e';
import Frame1f from './src/component/Frame1f';
<div id="root"></div>
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HOME"
          component={Frame1h}
          options={{ title: 'HOME' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


