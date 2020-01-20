import React, { PureComponent } from 'react'
import { Button, View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  buttonContainer: {
    bottom:25,
    right:25,
    justifyContent:'center',
    alignItems:'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    position: 'absolute'
  }
})

export default class FloatingButton extends PureComponent {
  static defaultProps = {
    onPressButton: () => null,
    iconName: 'plus'
  }
 
  render() {
    const {iconName} = this.props
    return (

      <TouchableOpacity
        onPress={this.props.onPressButton}
        style={styles.buttonContainer}
      >
        <Icon name={iconName} size={40} color={'#FFF'} />
        
      </TouchableOpacity>
    )
  }
}