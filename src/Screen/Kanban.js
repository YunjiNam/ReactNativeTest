import React, { useState } from 'react';
import { View, Button, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getStatusBarHeight } from "react-native-status-bar-height";

const Kanban = ({ navigation, route }) => {
  const [viewPage, setViewPage] = useState(false);

  // production
  const urlP = `https://tradir.io/boards/${route.params?.boardId}/kanban/`;
  const tokenP = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2NzQ2OTU3LCJqdGkiOiI1YzMyYTNlMjJmYjM0YTg0YjlmMTEwNTU5MzVkNGE2YiIsInVzZXJfaWQiOjEzfQ.uyFrVuSXPpMiewIZ3yu5u_xWZ4DxifMlw2c92uDri_8";
  const runFirstP = `
    window.isNativeApp = true;
    true; 
    window.localStorage.setItem('token', '${tokenP}');
  `;
  const testttP = `
    document.querySelector("#root > div.sc-pjUyM.cDGdtV").style.display = 'none';
    document.querySelector("#root > div.sc-qYHkt.EMJpN > div > div.sc-qWRsQ.QCfOw").style.display = 'none';
    document.querySelector("#root > div.sc-qYHkt.EMJpN > div > div.sc-qOhCc.bdSQfk").style.left = '20px';
    document.querySelector("#root > div.sc-qYHkt.EMJpN > div").style.paddingTop = '0px';
    document.querySelector("#root > div.sc-qYHkt.EMJpN > div").style.top = '10px';
    document.querySelector("#root > div.sc-prpXb.dfLWiU").style.display = 'none';
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
  const deviceWidth = Dimensions.get('window').width;
  const statusBarHeight = getStatusBarHeight();

  // document.querySelector("#root > div.sc-pRdeG.jiHoNq > div > div.sc-pKJEJ.lcpFTs").style.display = 'none';
  // 상단 nav bar display = 'none';
  // kanban view avatar group display = 'none';
  // board title left = '20px';
  // card list group paddingTop = '0px';
  // card list group top = '10px';
  // 하단 company info display= 'none';

  const testtt = `
    document.querySelector("#root > div.sc-qWRQj.fdqKpp").style.display = 'none';
    document.querySelector("#root > div.sc-pRdeG.jiHoNq > div > div.sc-pTStT.hKdSrw").style.display = 'none';
    document.querySelector("#root > div.sc-pRdeG.jiHoNq > div > div.sc-pKJEJ.lcpFTs").style.left = '20px';
    document.querySelector("#root > div.sc-pRdeG.jiHoNq > div").style.paddingTop = '0px';
    document.querySelector("#root > div.sc-pRdeG.jiHoNq > div").style.top = '10px';
    document.querySelector("#root > div.sc-pBmFw.kMkdYW").style.display = 'none';
    true;
  `;

  return(
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* custom header */}
      {/* <View style={{ backgroundColor: "orange", height: 64 - statusBarHeight, width: deviceWidth, position: "absolute", zIndex: 3, marginTop: statusBarHeight }}>  
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Boards')}
      />
      </View> */}
      <WebView
        source={{ 
          uri: urlP
         }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onMessage={(e) => {}}
        injectedJavaScript={testttP}
        onLoad={() => setViewPage(true)}
        injectedJavaScriptBeforeContentLoaded={runFirstP}
        injectedJavaScriptForMainFrameOnly={true}
        style={{ marginTop: 5, display: !viewPage ? 'none' : 'flex' }}
    />
    </View>
);
};

export default Kanban;