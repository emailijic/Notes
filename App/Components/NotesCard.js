import React, {PureComponent} from 'react'
import {
  StyleSheet, Text, View
} from 'react-native'

const styles=StyleSheet.create({
  row: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  column: {
    backgroundColor:'grey',
    height:100,
    width:150,
    borderWidth: 1,
    borderColor:'black',
    borderRadius:4
 },
 item: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 14,
  height:40,
  padding:10
  
},
dateItem: {
  color: 'black',
  fontWeight: 'bold',
  fontSize: 10,
  textAlign:'right'
  
  
}

})

class NoteCard extends PureComponent {
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
    const {noteId,noteText} = this.props
    return (
    <View style= {styles.row}>
        <View style={styles.column}>
          <Text style={styles.dateItem}>{this.state.date}</Text>
          <Text 
          ellipsizeMode='tail'
          numberOfLines={2}
          style={styles.item}>{noteText}
          </Text>
        </View>
    </View>
    )
  }
}
export default NoteCard