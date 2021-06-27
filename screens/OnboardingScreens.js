import React from 'react'
import {  Text, View, Button, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreens = ( { navigation } ) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('./images/circle.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('./images/circle.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding swiper',
        }
      ]}
    />
  )
}

export default OnboardingScreens

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
