import React from 'react'
import { Core } from 'react-chunky'
import * as DefaultStyles from '../styles'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Platform,
  TextInput,
  ActivityIndicator,
  View,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { FormLabel, FormInput, Button, Icon, FormValidationMessage, Card } from 'react-native-elements'
import { BlurView, VibrancyView } from 'react-native-blur'
import Spinner from 'react-native-loading-spinner-overlay'

export default class Screen extends Core.Screen {

  get styles() {
    return {
      containers: DefaultStyles.containers(this.props.theme),
      forms: DefaultStyles.forms(this.props.theme)
    }
  }

  get data() {
    return this.props.navigation.state.params || {}
  }

  pushTransition(transition, data) {
    this.props.navigation.navigate(transition.route, data)
  }

  renderProgressSpinner(title, visible) {
    return (<Spinner visible={ visible } overlayColor={this.props.theme.progressColor} textContent={ title } textStyle={{color: '#FFFFFF'}} />)
  }

  renderProgress() {
    return this.renderProgressSpinner("Please wait", this.state.progress)
  }

  replaceTransition(transition, data) {
    this.props.navigation.navigate(transition.route, data)
  }

  renderData(data) {
    return ( <View style={this.styles.containers.main}>
    </View>)
  }

  renderDataDefaults() {
    return ( <View style={this.styles.containers.main}>
      <Card
        title={ this.props.strings.noData }
        titleStyle={this.styles.forms.header}
        style={this.styles.forms.container}>
        <Button
          style={this.styles.forms.secondaryButton}
          backgroundColor='#ffffff'
          color="#039BE5"
          onPress={this._onRetryRetrieveData}
          title={this.props.strings.retry}/>
      </Card>
    </View>)
  }

  renderDataLoading() {
    return this.renderData()
  }

  renderDataError({ main }) {
    return this.renderData()
  }
}
