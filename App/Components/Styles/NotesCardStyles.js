import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
   
  },
  column: {
    backgroundColor:'grey',
    height:100,
    width:150,
    borderWidth: 1,
    borderColor:'black',
    borderRadius:4,
    flexBasis:'50%'
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
