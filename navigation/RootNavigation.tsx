import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { Splash } from '../components/Splash';
import { HomeScreen } from '../screens/Home';

const Stack = createStackNavigator();

export const RootNavigation = () => {
// TODO: add this when splash screen is ready
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  // }, []);

  // if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
