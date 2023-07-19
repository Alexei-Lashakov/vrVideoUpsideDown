/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const injectedIos = `
  const onWidgetTouchHadler = () => {
    DeviceMotionEvent.requestPermission();
  }
  document.body.addEventListener('touchend', onWidgetTouchHadler)
`;

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: 'https://delight-vr.com/documentation/recommendations/',
        }}
        startInLoadingState={true}
        style={{flex: 1, backgroundColor: 'transparent'}}
        injectedJavaScript={injectedIos}
        allowsInlineMediaPlayback
        javaScriptCanOpenWindowsAutomatically
        webviewDebuggingEnabled
        onMessage={() => {}}
      />
    </View>
  );
}

export default App;
