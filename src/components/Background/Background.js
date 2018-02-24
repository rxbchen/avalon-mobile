import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './BackgroundStyle'

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: false
    }
  }

  displayContent() {
    this.setState({showContent: true})
  }

  render() {
    const backgroundPath = '../../static/images/background.jpg';
    return (
      <ImageBackground source={require(backgroundPath)} style={styles.backgroundImage} onLoad={() => this.displayContent()}>
        {this.state.showContent ? this.props.children : null}
      </ImageBackground>
    )
  }
}
