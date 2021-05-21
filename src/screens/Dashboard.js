import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import auth from '@react-native-firebase/auth';

const signOut = () => {
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => {
          signOut();
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: 'StartScreen' }],
          // })
        }}
      >
        Logout
      </Button>
    </Background>
  )
}