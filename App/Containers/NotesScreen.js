import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/NotesScreenStyles'
import FloatingButton from '../Components/FloatingButton'
import NotesActions, { NotesSelector } from '../Redux/NotesRedux'
import { connect } from 'react-redux'
import { FlatList } from 'react-native-gesture-handler'
import NoteRow from "../Components/NoteRow"
import NoteCard from "../Components/NotesCard"

class NotesScreen extends PureComponent {
 
  componentDidMount() {
    this.getNotes()
    const {navigation} = this.props
    this.focusListener = navigation.addListener('didFocus',() => {
      this.getNotes()
    })
  } 
  componentWillUnmount() {
    this.focusListener.remove()
  }

  gotoNoteForm = () => this.props.navigation.navigate('NotesFormScreen')
  
  getNotes = () => {
    this.props.getNote()
  }
  
  renderItem = ({item}) => (<NoteCard noteId={item.noteId} noteText={item.noteText} />)

  keyExtractor = item => item.noteId

  render() { 
    console.log('this.props', this.props)
    return (
      <View style = { styles.container }>
        <Text style={styles.item}>Notes </Text>
        <FlatList
         data={this.props.notes}
         renderItem={this.renderItem}
         keyExtractor={this.keyExtractor}
        />
        <FloatingButton
          onPressButton={this.gotoNoteForm} 
          iconName = 'plus'
        />
        
      </View>
    )
  }
}
const mapStateToProps = state =>  ({
  notes: NotesSelector.getNotes(state)
})

const mapDispatchToProps = {
  getNote: NotesActions.getNotesRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen)