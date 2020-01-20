import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import NotesScreen from '../Containers/NotesScreen'
import NotesFormScreen from '../Containers/NotesFormScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  NotesScreen: { screen: NotesScreen },
  NotesFormScreen: { screen: NotesFormScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'NotesScreen',
  // initialRouteName: 'NotesFormScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
