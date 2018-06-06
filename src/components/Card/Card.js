import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Collapsible from 'react-native-collapsible'
import proptypes from 'prop-types'
import styles from './CardStyle'
import LinearGradient from 'react-native-linear-gradient';
import GLOBALS from 'src/globals'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isCollapsed: this.props.collapsed
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isCollapsed: nextProps.collapsed})
  }

  toggleCollapse() {
    this.setState({isCollapsed: !this.state.isCollapsed})
  }

  render() {
    return (
      <View style={this.props.style ? this.props.style : null}>
        <LinearGradient colors={GLOBALS.COLOR.RED_GRADIENT} style={styles.linearGradient}>
          <TouchableOpacity style={[styles.titleContainer, this.props.titleContainer ? this.props.titleContainer : null]} disabled={this.props.locked} onPress={() => this.toggleCollapse()}>
            <Text style={[styles.titleText, this.props.titleText ? this.props.titleText : null]}>{this.props.title}</Text>
            <Image style={styles.titleImage} source={this.props.icon} />
          </TouchableOpacity>
        </LinearGradient>
        <Collapsible style={[styles.collapsibleContainer, this.props.collapsibleContainer ? this.props.collapsibleContainer : null]}
                     collapsed={this.state.isCollapsed}>
          {this.props.children}
        </Collapsible>
      </View>
    )
  }
}

Card.propTypes = {
  title: proptypes.string.isRequired,
  children: proptypes.any.isRequired,
  collapsed: proptypes.bool,
  icon: proptypes.any
}

Card.defaultProps = {
  collapsed: true,
  icon: null
}
