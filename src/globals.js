import {Dimensions, dimensions} from 'react-native'

export default {
  COLOR: {
    RED_GRADIENT: ['#762323', '#5d1414'],
    GREEN_GRADIENT: ['#00a651', '#00a651'],
    LIGHT_RED_GRADIENT: ['#ad3332', '#891d1d'],
    DISABLED: ['#772323', '#5c1415']
  },
  SIZE: {
    TOP_BAR: 60,
    SCREEN_HEIGHT: Dimensions.get('window').height - 60,
    SCREEN_OFFSET: (Dimensions.get('window').height - 60)*0.1,
  }
};