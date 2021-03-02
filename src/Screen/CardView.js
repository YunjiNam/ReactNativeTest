import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Boards extends React.Component {
  render() {
    const myScript = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('hi') }, 2000);
      true;
    `;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri:
              'https://github.com/react-native-community/react-native-webview',
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          bounces={true}
          
          injectedJavaScript={myScript}
        />
      </View>
    );
  }
}