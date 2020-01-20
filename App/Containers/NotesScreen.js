import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/NotesScreenStyles'
import FloatingButton from '../Components/FloatingButton'

export default class NotesScreen extends PureComponent {
  gotoNoteForm = () => this.props.navigation.navigate('NotesFormScreen')
  render(){
    return (
      <View style = { styles.container }>
        <Text> Notes </Text>
        <FloatingButton
          onPressButton={this.gotoNoteForm} 
          iconName = 'plus'
        />
      </View>
    )
  }
}