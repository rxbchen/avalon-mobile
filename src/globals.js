import {Dimensions, dimensions} from 'react-native'

export default {
  COLOR: {
    RED_GRADIENT: ['#762323', '#5d1414'],
    GREEN_GRADIENT: ['#56bf00', '#57ab16']
  },
  SIZE: {
    TOP_BAR: 60,
    SCREEN_HEIGHT: Dimensions.get('window').height - 60,
    SCREEN_OFFSET: (Dimensions.get('window').height - 60)*0.1,
  }
};