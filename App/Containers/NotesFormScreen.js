import React, { PureComponent } from 'react'
import { View , Text , TextInput} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/NotesFormScreenStyles'
import FloatingButton from '../Components/FloatingButton'
import NotesActions, { NotesSelector } from '../Redux/NotesRedux'

class NotesFormScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  saveNote = () => {
    this.props.saveNote(null,this.state.text)
    this.props.navigation.goBack()
  }

  render() {
    console.log('this.props', this.props)
    return (
      <View style = { styles.container }>
        <TextInput
          style={{height:40}}
          placeholder="Type note"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <FloatingButton 
          onPressButton={this.saveNote}
          iconName='save'
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  fetching: NotesSelector.getNoteSaveFetching(state)
})

const mapDispatchToProps = {
  saveNote: NotesActions.saveNoteRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesFormScreen)