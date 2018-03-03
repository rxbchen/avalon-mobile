import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible'
import proptypes from 'prop-types'
import styles from './CardStyle'
import LinearGradient from 'react-native-linear-gradient';



export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isCollapsed: this.props.collapsed
    }
  }

  toggleCollapse() {
    this.setState({isCollapsed: !this.state.isCollapsed})
  }

  render() {
    return (
      <View>
        <LinearGradient colors={['#762323', '#5d1414']} style={styles.linearGradient}>
          <TouchableOpacity style={styles.titleContainer} onPress={() => this.toggleCollapse()}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Image style={styles.titleImage} src={this.props.icon} />
          </TouchableOpacity>
        </LinearGradient>
        <Collapsible style={styles.collapsibleContainer} collapsed={this.state.isCollapsed}>
          {this.props.children}
        </Collapsible>

        
      </View>
    )
  }
}

Card.propTypes = {
  title: proptypes.string.isRequired,
  children: proptypes.element.isRequired,
  collapsed: proptypes.bool,
  icon: proptypes.any
}

Card.defaultProps = {
  collapsed: true,
  icon: null
}
