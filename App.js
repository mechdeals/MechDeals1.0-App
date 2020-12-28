/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Context from './src/Context/Context';
import GettingStarted from './src/screens/GettingStarted/GettingStarted';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AppData: {
        updateContext: this.updateContext,
      },
    };
  }

  updateContext = (_newValue) => {
    let _permissionCopy = this.state.AppData;
    if (Array.isArray(_newValue)) {
      _newValue.map((_data) => {
        _permissionCopy[_data.key] = _data.value;
      });
      this.setState({
        AppData: {
          ...this.state.AppData,
        },
      });
    } else {
      this.setState({
        AppData: _permissionCopy,
      });
    }
  };

  render() {
    return (
      <View>
        <GettingStarted />
        {/* <Text style={styles.heading_text}>App</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading_text: {
    fontFamily: 'Avalon',
    fontSize: 30,
  },
});

App.contextType = Context;
export default App;
