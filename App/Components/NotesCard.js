import React, {PureComponent} from 'react'
import {
  Text, View
} from 'react-native'
import styles from './Styles/NotesCardStyles'

class NoteCard extends PureComponent {
  componentDidMount() {
    const date = new Date().getDate(); 
    const month = new Date().getMonth() + 1; 
    const year = new Date().getFullYear(); 
    this.setState({ 
      date:
        date + '/' + month + '/' + year + ' ' ,
    })
  }
  state={date: ''}

  render() {
    const {noteId,noteText} = this.props
    return ( 
    <View style= {styles.row}>
      <View style={styles.column}>
        <Text style={styles.dateItem}>{this.state.date}</Text>
        <Text 
          ellipsizeMode='tail'
          numberOfLines={2}
          style={styles.item}
        >
          {noteText}
        </Text>
      </View>
    </View>
    )
  }
}
export default NoteCard