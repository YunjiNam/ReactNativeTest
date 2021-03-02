import React, { useState } from 'react';
import { View, Button, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getStatusBarHeight } from "react-native-status-bar-height";

const Email = ({ navigation, route }) => {
    const deviceheight = Dimensions.get('window').height;
    const [viewPage, setViewPage] = useState(false);
  // production
  const urlP = "https://tradir.io/email/inbox/";
  const tokenP = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2NzQ2OTU3LCJqdGkiOiI1YzMyYTNlMjJmYjM0YTg0YjlmMTEwNTU5MzVkNGE2YiIsInVzZXJfaWQiOjEzfQ.uyFrVuSXPpMiewIZ3yu5u_xWZ4DxifMlw2c92uDri_8";
  const runFirstP = `
    window.isNativeApp = true;
    true; 
    window.localStorage.setItem('token', '${tokenP}');
  `;
  const testttP = `
    document.querySelector("#root > div.sc-pjUyM.cDGdtV").style.display = 'none';
    document.querySelector("#root > div.sc-prpXb.dfLWiU").style.display = 'none';
    document.querySelector("#root > div.sc-qYHkt.lmWBms").style.position = 'relative';
    document.querySelector("#root > div.sc-qYHkt.lmWBms").style.top = '5px';
    true;
  `;

  // local
  const url = `http://localhost:3000/boards/${route.params?.boardId}/kanban/`;
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2ODEyMDU4LCJqdGkiOiIyNDllOWQzMjUwNzQ0NGQ3YjgyYmI0OTIxY2RiMDMzOSIsInVzZXJfaWQiOjI3fQ.YENnZvP0h3mxkrrCpvj350OJJvaRLLPUCYHEu7HFLKk";
  const runFirst = `
    window.isNativeApp = true;
    true; 
    window.localStorage.setItem('token', '${token}');
  `;
//   const deviceheight = Dimensions.get('window').height;
  const statusBarHeight = getStatusBarHeight();

  return(
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <WebView
        source={{ 
          uri: urlP
         }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        javaScriptEnabledAndroid={true}
        scalesPageToFit
        originWhitelist={['*']}
        onMessage={event => onMessage(event)}
        injectedJavaScript={testttP}
        onLoad={() => setViewPage(true)}
        injectedJavaScriptBeforeContentLoaded={runFirstP}
        injectedJavaScriptForMainFrameOnly={true}
        style={{ display: !viewPage ? 'none' : 'flex' }}
    />
    </View>
);
};

export default Email;