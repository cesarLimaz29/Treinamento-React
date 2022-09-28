
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './pages/login';
import home from './pages/home';
import cliente from './pages/cliente';
import lista from './pages/listar';
import cadastrar from './pages/cadastrar';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="Login" component={login}  options={{ headerShown: false}} />
      <Stack.Screen name="Home" component={home} options={{ headerShown: false}} />
      <Stack.Screen name="Cliente" component={cliente} options={{ headerShown: false}} />
      <Stack.Screen name="Listar" component={lista}  />
      <Stack.Screen name="Cadastrar" component={cadastrar} />
    
      
    </Stack.Navigator>
  );
}

const App = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    
  );
};


export default App;
