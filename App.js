import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreens from './screens/OnboardingScreens';
import AsyncStorage from '@react-native-community/async-storage'

const AppStack = createStackNavigator();

export default function App() {

  let [isFirstLaunch, setIsFirstLaunch] = useState(null)

  useEffect(() =>{
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunch', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    })

  }, [])

  if (isFirstLaunch == null) {
    return null
  } else if (isFirstLaunch == true) {
    return(
      <NavigationContainer>
        <AppStack.Navigator
          headerMode='none'
        >
          <AppStack.Screen name='OnboardScreen' component={ OnboardingScreens } />
          <AppStack.Screen name='Login' component={ LoginScreen } />
        </AppStack.Navigator>
      </NavigationContainer>
    )
  } else {
    return <LoginScreen/>
  }
}
  