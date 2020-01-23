import React, { PureComponent } from 'react'
import {TouchableOpacity, View,Text } from 'react-native'
import styles from './Styles/SwitchStyles'

class Switch extends PureComponent {

  static defaultProps = {
    onValueChange: () => null,
    value: false
  }
  _onPressFirstButton = () => {
   this.props.onValueChange(2)
  }
  _onLPressSecondButton = () => {
    this.props.onValueChange(1)
  }
  render() {
    return(
    <View style={styles.alternativeLayoutButtonContainer}>
      <TouchableOpacity onPress={this._onPressFirstButton}>
        <View style={styles.button}>
         <Text style={styles.buttonText}>2 items per row</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._onLPressSecondButton}>
        <View style={styles.secondButton}>
         <Text style={styles.buttonText}>1 item per row</Text>
        </View>
      </TouchableOpacity>
    </View>
    )}
}
export default Switch;