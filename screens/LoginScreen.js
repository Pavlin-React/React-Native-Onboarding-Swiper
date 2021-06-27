import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LoginScreen = () => {
  return (
    <View style={ styles.container } >
      <Text>Login Screen</Text>
      <Button
        title='Click Here'
        onPress={ () => alert( 'Button Clicked !' ) }
      />
    </View>
  )
}

export default LoginScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center'
  }
})
