import React from 'react'
import {  Text, View, Button, StyleSheet } from 'react-native'

const OnboardingScreens = ( { navigation } ) => {
  return (
    <View style={ styles.container } >
      <Text>Onboarding Screen</Text>
      <Button
        title='Click Here'
        onPress={ () => navigation.navigate( 'Login' ) }
      />
    </View>
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
