import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'
import DetalhesSigno from "./DetalhesSigno";
import ListaSignos from "./ListaSignos";

export default class App extends Component {
  render () {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path='/:idSigno' component={DetalhesSigno} />
            <Route component={ListaSignos} />
          </Switch>
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
