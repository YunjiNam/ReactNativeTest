import React from 'react';
import { View, Platform } from 'react-native';
import { WebView, Linking } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Boards extends React.Component {

    handleNavigationStateChange = navState => {
      console.log("nav1", navState);
      const {url} = navState;
      console.log('check1', url, url.includes('kanban'));
      if (!url) return;
        
      if (url.includes('kanban')) {
        console.log("boardId", url.split('boards/')[1].split('/kanban')[0]);
        this.props.navigation.navigate('Kanban', {boardId: url.split('boards/')[1].split('/kanban')[0]});
        this.webref.goBack();

        return false;
      }
    };

    onShouldStartLoadWithRequest = (event) => {
      //console.log('andro');
      console.log("nav2", event);
      console.log('hi', this.props.uri);
      console.log('check2', event.url && event.url);
        if (event.url && event.url.includes('kanban')) {
          console.log("boardId", event.url.split('boards/')[1].split('/kanban')[0]);
          this.props.navigation.navigate('Kanban', {boardId: event.url.split('boards/')[1].split('/kanban')[0]});
          this.webref.goBack();

          return false;
        } 
        return true;
      // console.log("Android", event);
      // if (
      //   event.url.startsWith('http://') ||
      //   event.url.startsWith('https://') ||
      //   event.url.startsWith('about:blank')
      // ) {
      //   return true;
      // }
      // if (Platform.OS === 'android') {
      //   console.log('andro');
      //   if (event.url.includes('kanban')) {
      //     console.log("boardId", event.url.split('boards/')[1].split('/kanban')[0]);
      //     this.props.navigation.navigate('Kanban', {boardId: event.url.split('boards/')[1].split('/kanban')[0]});
      //     this.webref.goBack();
      //   }
      // } else {
      //   Linking.openURL(event.url).catch(err => {
      //     alert(
      //       '앱 실행에 실패했습니다. 설치가 되어있지 않은 경우 설치하기 버튼을 눌러주세요.',
      //     );
      //   });
      //   return false;
      // }
    };
  
    render() {

        // production
        const urlP = "https://tradir.io/boards/";
        const tokenP = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2NzQ2OTU3LCJqdGkiOiI1YzMyYTNlMjJmYjM0YTg0YjlmMTEwNTU5MzVkNGE2YiIsInVzZXJfaWQiOjEzfQ.uyFrVuSXPpMiewIZ3yu5u_xWZ4DxifMlw2c92uDri_8";
        const runFirstP = `
          window.isNativeApp = true;
          true; 
          window.localStorage.setItem('token', '${tokenP}');
        `;
        const testttP = `
          document.querySelector("#root > div.sc-pjUyM.cDGdtV").style.display = 'none';
          document.querySelector("#root > div.sc-qYHkt.jzKnZN").style.top = '-20px';
          document.querySelector("#root > div.sc-prpXb.dfLWiU").style.display = 'none';
          window.postMessage("Your message");
          true;
        `;

        // local
        const url = "http://localhost:3000/boards/";
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2ODEyMDU4LCJqdGkiOiIyNDllOWQzMjUwNzQ0NGQ3YjgyYmI0OTIxY2RiMDMzOSIsInVzZXJfaWQiOjI3fQ.YENnZvP0h3mxkrrCpvj350OJJvaRLLPUCYHEu7HFLKk";
        const runFirst = `
          window.isNativeApp = true;
          true; 
          window.localStorage.setItem('token', '${token}');
        `;

        const patchPostMessageJsCode = `(${String(
          function() {
          //   var originalPostMessage = window.postMessage
          //   var patchedPostMessage = function(message, targetOrigin, transfer) {
          //       originalPostMessage(message, targetOrigin, transfer)
          //   }
          //   patchedPostMessage.toString = function() {
          //       return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')
          //   }
          //   window.postMessage = patchedPostMessage
          document.querySelector("#root > div.sc-qWRQj.fdqKpp").style.display = 'none';
          document.querySelector("#root > div.sc-pRdeG.emPIfi").style.top = '-20px';
          true;
          }
        )})();`

        const testtt = `
          document.querySelector("#root > div.sc-qWRQj.fdqKpp").style.display = 'none';
          document.querySelector("#root > div.sc-pRdeG.emPIfi").style.top = '-20px';
          document.querySelector("#root > div.sc-pBmFw.kMkdYW").style.display = 'none';
          true;
        `;


        return(
          <View style={{ flex: 1 }}>
            <WebView
                ref={r => (this.webref = r)}
                source={{ 
                  uri: urlP
                 }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                javaScriptEnabledAndroid={true}
                // onMessage={(e) => {}}
                injectedJavaScriptBeforeContentLoaded={runFirstP}
                injectedJavaScript={testttP}
                onNavigationStateChange={this.onShouldStartLoadWithRequest}
                // bounces={true}
                // onMessage={event => {
                //   alert('MESSAGE >>>>' + event.nativeEvent.data);
                // }}
                onMessage={event => onMessage(event)}
                // startInLoadingState
                // scalesPageToFit
                // onLoadStart={() => {
                //   console.log("LOAD START ");
                // }}
                // onLoadEnd={() => {
                //   console.log('LOAD END');
                // }}
                // onError={err => {
                //   console.log('ERROR ');
                //   console.log(err);
                // }}
                originWhitelist={['*']}
                // onShouldStartLoadWithRequest={request => {
                //   if (Platform.OS === 'android') {
                //     const url = request.url;
                //     console.log("request", request);
                //     if (url !== uri) {
                //       console.log('url change');
                //       console.log("boardId", url.split('boards/')[1].split('/kanban')[0]);
                //     }
                    
                //   }
                // }}
                onLoadProgress={(e) => this.onShouldStartLoadWithRequest(e.nativeEvent)}
                onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                // onShouldStartLoadWithRequest={(request) => {
                //   // Only allow navigating within this website
                //   return onShouldStartLoadWithRequest(event);
                // }}
                style={{ marginTop: 5 }}
            />
          </View>
            
        );
    }
}

handleWebViewNavigationStateChange = (newNavState) => {
  this.props.navigation.navigate('Kanban');
  const {url} = newNavState;
  if (!url) return;

  if (url.includes('kanban')) {
    this.webref.stopLoading();
    this.props.navigation.navigate('Kanban');
  }
}