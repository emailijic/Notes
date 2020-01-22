import React, { PureComponent } from 'react'
import {
  StyleSheet, Text, View
} from 'react-native'

const styles=StyleSheet.create({
  item: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    height:40
    
  },
  container:{
    flexDirection:'row', 
    backgroundColor:'white',
    justifyContent:'center',
    alignItems: 'stretch',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    height: 70,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    
  },
  dateItem: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent:'flex-end',
    
  }
})

class NoteRow extends PureComponent {

  componentDidMount() {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    this.setState({ 
      date:
        date + '/' + month + '/' + year + ' ' ,
    })
  }

  state={date: ''}

  render() {
  const {noteId, noteText} = this.props
  return (
    <View style={styles.container}>
    <View 
      style={{flex:1}}
    >
      <Text 
        ellipsizeMode='tail'
        numberOfLines={2}
        style={styles.item}>{noteText}</Text>
      <Text style={styles.dateItem}>{this.state.date}</Text>
    </View>
  </View>
  )
  }
}
export default NoteRow