import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  button: {
    marginBottom: 30,
    width: 60,
    height: 50,
    backgroundColor: '#2196F3'
  },
  secondButton: {
    marginBottom: 30,
    width: 60,
    height: 50,
    backgroundColor: '#841584'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap:'wrap'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize:10
  }
})