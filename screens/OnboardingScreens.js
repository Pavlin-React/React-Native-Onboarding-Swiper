import React from 'react'
import {  Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

let Skip = ({...props}) => (
  <Button
    title='Skip'
    color='#000000'
    {...props}
  />
)
let Next = ({...props}) => (
  <Button
    title='Next'
    color='#000000'
    {...props}
  />
)
let Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal: 8}}
    {...props}
  >
    <Text style={{fontSize: 18}} >
      Done
    </Text>
  </TouchableOpacity>
)

let Dots = ({selected}) => {
  let backgroundColor
  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'

  return(
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  )
}

const OnboardingScreens = ( { navigation } ) => {
  return (
    <Onboarding
      SkipButtonComponent={ Skip }
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip = { () => navigation.replace('Login') }
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
