import React from 'react'
import {  Text, View, Button, StyleSheet, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreens = ( { navigation } ) => {
  return (
    <Onboarding
      onSkip = { () => navigation.navigate('Login') }
      onDone = { () => navigation.navigate('Login') }
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/pic7.jpg')} />,
          title: 'Connect to the world',
          subtitle: 'New way to connect to the world',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/pic4.jpg')} />,
          title: 'Share your favorites',
          subtitle: 'Share oyur things with other friends',
        },
        {
          backgroundColor: '#ffc0cb',
          image: <Image source={require('../assets/pic8.jpg')} />,
          title: 'Become the star',
          subtitle: 'Let the inspire take you to the sky',
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
